import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Logo from './components/Logo/Logo';
import UserInfo from './components/UserInfo/UserInfo';
import Navigation from './components/Navigation/Navigation';
import ImageUploader from './components/ImageUploader/ImageUploader';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import 'tachyons';


const app = new Clarifai.App({
  apiKey: 'b77f2eb438844c04b9b29a374bf2ec2b'
});

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
      boxes: []
    }
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  onScanClick = async (event) => {
    try {
      const response = await app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input);
      const regions = response.outputs[0].data.regions.map(region => { return region.region_info.bounding_box });
      this.displayFaceBoxes(this.calculateFaceLocations(regions));
    } catch (error) {
      console.log(error);
    }
  }

  calculateFaceLocations = (regions) => {
    const image = document.querySelector('#ImageDisplay_image');
    const imageW = Number(image.width);
    const imageH = Number(image.height);
    const locations = regions.map(region => {
      return {
        top: region.top_row * imageH,
        bottom: imageH - (region.bottom_row * imageH),
        left: region.left_col * imageW,
        right: imageW - (region.right_col * imageW)
      }
    });
    return locations;
  }

  displayFaceBoxes = (locations) => {
    this.setState ({
      boxes: locations
    })
  }

  render() {
    return (
      <div className="ma tc">
        <Logo />
        <UserInfo />
        <Navigation />
        <ImageUploader onChange={this.onInputChange} onScan={this.onScanClick} />
        <ImageDisplay imageUrl={this.state.input} faceBoxes={this.state.boxes} />
      </div>
    );
  }
}

export default App;
