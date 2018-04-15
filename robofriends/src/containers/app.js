import React, {Component} from 'react';
import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll';
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

		const { robots, searchfield } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		return !robots.length
		?(
			<h1 className="f-subheadline ma3 tc">LOADING</h1>
		)
		:(
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

export default App;