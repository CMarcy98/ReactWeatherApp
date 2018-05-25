import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return(
			<form className="input-group">
				<input />
				<span className="input-group-btn">
					<button className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}