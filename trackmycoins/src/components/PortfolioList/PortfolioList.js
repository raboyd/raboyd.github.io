import React from 'react';

const totalValue = (portofolio) => {
	let value = 0;
	return value;
};

const renderCoin = (coin, onDelete) => {
	return (
		<div key={coin.Id}>
			<img src={`https://www.cryptocompare.com${coin.ImageUrl}`} alt={`${coin.CoinName} Logo`} width="30" height="30" /> 
			{coin.CoinName}
			<button onClick={() => onDelete(coin)}>Delete</button>
		</div>
	)
};

const PortfolioList = (props) => {
	const { portfolio, onDelete } = props;
	console.log(portfolio);
	return (

		<div>
			<h2>My Portfolio</h2>
			<strong>Total value: {totalValue(portfolio)}</strong>
			{ portfolio.map(item => renderCoin(item, onDelete)) }
		</div>

	)
};

export default PortfolioList;