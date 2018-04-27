import React from 'react';

const CoinSummary = (props) => {
	const { coinData, coinPriceData } = props;
	return (
		<div>
			<img src={`https://www.cryptocompare.com${coinData.ImageUrl}`} alt={`${coinData.CoinName} Logo`} width="100" height="100" />
			{coinData.FullName}<br />
			Total supply: { coinPriceData ?  coinPriceData.SUPPLY : "Please Wait" }<br />
			Price per coin: { coinPriceData ? coinPriceData.PRICE : "Please Wait" }<br />
			24 Hour Low: { coinPriceData ? coinPriceData.LOW24HOUR : "Please Wait" }<br />
			24 Hour High: { coinPriceData ? coinPriceData.HIGH24HOUR : "Please Wait" }<br />
		</div>
	)
}

export default CoinSummary;