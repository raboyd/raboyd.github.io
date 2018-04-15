import React from 'react';
import Card from './card';

const CardList = (props) => {
	return (
		<div>
		{

			props.robots.map(robot => {
				return (
					<Card 
					key={robot.id} 
					id={robot.id} 
					name={robot.name} 
					email={robot.email}
					/>
				);
			})

		}
		</div>
	);
}

export default CardList;