import React, {Component} from "react";
import {Link} from 'react-router-dom';
import CalendarMoodResult from './CalendarMoodResult';
import '../stylesheets/Calendar.scss';

class Calendar extends Component {
	render() {
		const {resetEditorInfo, calendarMoodArray} = this.props;
		return (
			<section className ="calendar">
			<div className="calendar__container"></div>
			<Link to="/">
			<div className="calendar__add" onClick={resetEditorInfo}> + </div>
			</Link>
			<div className="calendar__result--container">
				<CalendarMoodResult calendarMoodArray={calendarMoodArray}/>
		</div>
		</section>


		);
	}
}

export default Calendar;
