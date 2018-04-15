import React from 'react';

const Card = (props) => {
	const {name, email, id} = props;
	return (
		<div className="bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img src={`https://robohash.org/${id}?size=200x200`} alt="Robot" />
			<div>
				<h2 className="dark-blue">{name}</h2>
				<p className="dark-blue">{email}</p>
			</div>
		</div>
	);
}

export default Card;