import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
	renderWeather(cityData) {
		const city = cityData.city;
		const temps = cityData.list.map(weather => weather.main.temp);

		return (
			<tr key={city.id}>
				<td>{ city.name }</td>
				<td>
					<Sparklines data={temps} width={180} height={120}>
						<SparklinesLine color="#253e56" />
					</Sparklines>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);