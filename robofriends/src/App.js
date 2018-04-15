import React, {Component} from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';
import Scroll from './scroll';
import './app.css';

class App extends Component {

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	render(){

		let filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		if (this.state.robots.length === 0){

			return (
				<h1 className="f-subheadline ma3 tc">LOADING</h1>
			);

		} else {

			return (
				<div className="tc">
					<h1 className="f-subheadline ma3">Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<hr/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);

		}

	}

}

export default App;