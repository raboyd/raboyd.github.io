import React from 'react';

const FilterDropDown = (props) => {

	const { filterOptions, filterChange } = props;

	return (

		<select onChange={filterChange}>
			{ filterOptions.map(option => <option>{option}</option>) }
		</select>
	);
}

export default FilterDropDown;