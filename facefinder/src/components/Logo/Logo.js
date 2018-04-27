import React from 'react';
import face from './face.svg';

const Logo = () => {
	return (
		<div>
			<img alt="Logo" src={face} style={{ width: '100px', height: '100px'}} />
		</div>
	)
}

export default Logo;