import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		// We need to go and fetch weather data
	}

	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five day forecast in your favorite cities"
					className="form-control"
					onChange={ this.onInputChange }
					value={this.state.term}	/>
				<span className="input-group-btn">
					<button className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}