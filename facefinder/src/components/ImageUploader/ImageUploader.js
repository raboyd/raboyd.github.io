import React from 'react';

const ImageUploader = (props) => {
	const { onChange, onScan } = props;
	return (
		<div>
			<p>
				{'Intro text goes here ...'}
			</p>
			<div>
				<input onChange={onChange} type="text" />
				<button onClick={onScan}>Scan</button>
			</div>
		</div>
	)
}

export default ImageUploader;