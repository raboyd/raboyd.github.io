import React from 'react';
import './ImageDisplay.css';

const ImageDisplay = (props) => {
	const { imageUrl, faceBoxes } = props;
	return (
		<div className="absolute center">
			<img id="ImageDisplay_image" alt="" src={imageUrl} width="500px" height="auto" />
			{
				faceBoxes.map((faceBox, i) => {
					return (
						<div key={`ImageDisplay_FaceBox_${i}`} className="bounding-box grow" style={{ top: faceBox.top, left: faceBox.left, bottom: faceBox.bottom, right: faceBox.right }}></div>
					)
				})
			}
		</div>
	)
}

export default ImageDisplay;