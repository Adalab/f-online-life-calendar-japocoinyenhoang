import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Calendar extends Component {
	render() {
		const {resetEditorInfo} = this.props;
		return (
			<section className ="Calendar">
			<div className="Calendar__container"></div>
			<Link to="/">
			<div className="calendar__add" onClick={resetEditorInfo}> + </div>
			</Link>
			<div className="calendar__result--container">
					<ul className="calendar__result">
						<li className="calendar__result--face">:P</li>
					</ul>
		</div>
		</section>


		);
	}
}

export default Calendar;
