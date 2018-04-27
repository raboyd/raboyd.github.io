import React from 'react';

const CurrencySelection = (props) => {

	const { selectedCurrency, onChangeSelection } = props;

	return (
		<div>
			<select onChange={onChangeSelection} value={selectedCurrency}>
				<option>BTC</option>
				<option>GBP</option>
				<option>EUR</option>
				<option>USD</option>
			</select>
		</div>
	)
};

export default CurrencySelection;