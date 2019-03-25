import React, {Component} from "react";

class CalendarMoodResult extends Component {
	render() {
		const {calendarMoodArray}=this.props;
		if (calendarMoodArray.length>0){
			return (
				<ul className="calendar__result">
				{calendarMoodArray.map((item, index)=>{
					return (
						<li className="calendar__day" key="index">
							<p className="day__date">{item.date}</p>
							<p className={`day__mood ${item.inputMood==='goodMood' ? 'day__mood--good' : 'day__mood--bad'}`}>{item.inputMood}{item.inputMessege}</p>
						</li>
					)
				})}
				</ul>

			)
		} else {
			alert ('not record found, please star adding your mood');
		}

	}
}

export default CalendarMoodResult;
