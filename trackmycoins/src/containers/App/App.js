import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Cookies from 'universal-cookie';
import CoinSummary from '../../components/CoinSummary/CoinSummary';
import CurrencySelection from '../../components/CurrencySelection/CurrencySelection';
import PortfolioList from '../../components/PortfolioList/PortfolioList';
import './App.css';

// todo - refactor callback functions
// todo - add comments

class App extends Component {

    constructor(){
      super();
      this.state = {
        coins: [], 
        selectedCoin: null,
        selectedCoinPrices: null,
        selectedCurrency: "GBP",
        portfolio: [], 
        suggestions: [],
        value: ""
      }
    }

    async componentDidMount(){
      
      const coinDataRaw = await fetch("https://min-api.cryptocompare.com/data/all/coinlist");
      const coinData = await coinDataRaw.json();
      this.setState({ coins: Object.values(coinData.Data) });

      const cookies = new Cookies();
      const portfolioCookie = cookies.get('portfolio');
      if (portfolioCookie){
        this.setState({ portfolio: portfolioCookie });
      }
      
    }

    getPriceData = async (coin, currency) => {
      const priceDataRaw = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin.Symbol}&tsyms=${currency}`);
      const priceData = await priceDataRaw.json();
      this.setState({ selectedCoinPrices:  priceData["DISPLAY"][coin.Symbol][currency] });
      this.forceUpdate();
    };

    getSuggestions = value => {
      const { coins } = this.state;
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      return inputLength === 0 ? [] : coins.filter(coin => coin.CoinName.toLowerCase().slice(0, inputLength) === inputValue || coin.Symbol.toLowerCase().slice(0, inputLength) === inputValue
      );
    };

    getSuggestionValue = suggestion => {
      const { selectedCurrency } = this.state;
      this.setState({ selectedCoin: suggestion });
      this.getPriceData(suggestion, selectedCurrency);
      return suggestion.FullName;
    };
     
    renderSuggestion = suggestion => {
      return (
        <div>
          <img src={`https://www.cryptocompare.com${suggestion.ImageUrl}`} alt={`${suggestion.CoinName} Logo`} width="30" height="30" /> 
          {suggestion.FullName}
        </div>
      )
    };

    onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
    };
   
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: this.getSuggestions(value)
      });
    };
   
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

    onChangeCurrencySelection = (event) => {
      const { selectedCoin } = this.state;
      const selectedCurrency = event.target.value;
      this.setState({
        selectedCurrency: selectedCurrency
      });
      if (selectedCoin) {
        this.getPriceData(selectedCoin, selectedCurrency)
      }
    };

    onAddToPortfolio = () => {
      const cookies = new Cookies();
      // grab current portfolio and selected coin from state
      const { portfolio, selectedCoin } = this.state;
      // only add coin to portfolio if a coin is selected, and the coin isn't already in the portfolio
      if (selectedCoin && portfolio.filter(item => item.Symbol === selectedCoin.Symbol).length === 0){
        portfolio.push(selectedCoin);
        this.setState({ portfolio: portfolio });
        // commit portfolio to cookies
        cookies.set('portfolio', portfolio);
      }
    }

    onRemoveFromPortfolio = (coin) => {
      const cookies = new Cookies();
      const { portfolio } = this.state;
      let deleteIndex = -1;
      portfolio.find((item, index) => {
        if (coin.Symbol === item.Symbol){
          deleteIndex = index;
        }
      });
      if (deleteIndex > -1){
        portfolio.splice(deleteIndex, 1);
      }
      this.setState({ portfolio: portfolio });
      cookies.set('portfolio', portfolio);
      this.forceUpdate();
    };

    render() {

      const { selectedCoin, selectedCoinPrices, selectedCurrency, portfolio, suggestions, value } = this.state;
 
      const inputProps = {
        placeholder: "",
        value,
        onChange: this.onChange
      };

      return (

        <div className="App">

          <CurrencySelection selectedCurrency={selectedCurrency} onChangeSelection={this.onChangeCurrencySelection} />

          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />

          <button onClick={this.onAddToPortfolio}>Add</button>

          <br />

          {selectedCoin && <CoinSummary coinData={selectedCoin} coinPriceData={selectedCoinPrices} selectedCurrency={selectedCurrency} />}

          {portfolio.length > 0 && <PortfolioList portfolio={portfolio} onDelete={this.onRemoveFromPortfolio}  />}

        </div>

      );
    }

}

export default App;
