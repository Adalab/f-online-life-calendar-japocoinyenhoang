import React, { Component } from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Editor from './components/Editor';
import Calendar from './components/Calendar';

class App extends Component {
	constructor(props) {
		super(props);

		this.state ={
			inputDate : "",
			inputMood : "",
			inputMessage : "",
			calendarMoodArray : []

		}
		this.getInputDate = this.getInputDate.bind(this);
		this.getInputMood = this.getInputMood.bind(this);
		this.getInputMessage = this.getInputDate.bind(this);
	}

	componentDidMount (){

	}
	getInputDate = e =>{
		const inputDate = e.currentTarget.value;
		this.setState({
			inputDate
		})
	}
	getInputMood =e => {
		const inputMood = e.currentTarget.value;
		this.setState({
			inputMood
		})
	}

	getInputMessage = e => {
		const inputMessage = e.currentTarget.value;
		this.setState({
			inputMessage
		})
	}
	checkRepeatedDate = () => {
		const {calendarMoodArray, inputDate} =this.state;
		for (const day of calendarMoodArray){
			if (inputDate === day.date) {return true}
		}
	}

	checkIfMoodSelected = () => {
		const {inputMood} = this.state;
		if (inputMood=== '') {return true}
	}

	saveDate = () => {
		let {inputDate, inputMood, inputMessage} = this.state;
		if (inputMood ==='badMood'){
			inputMessage ='';
		}
		const newState ={
			inputDate, inputMood, inputMessage
		}
		if (!this.checkRepeatedDate() && !this.checkIfMoodSelected()){
			this.setState(prevState =>({
				calendarMoodArray: [...prevState.calendarMoodArray, newState]
			}))
		} else {
			alert ('You already add a mood for this day')
		}
	}

	resetEditorInfo = () => {
		this.setState({
			inputDate: '',
			inputMood: '',
			inputMessage: ''
		})
	}

  render() {
		const {getInputDate, getInputMessage, getInputMood, saveDate,resetEditorInfo} = this.props;
		const {calendarMoodArray,inputMood}=this.state;
    return (
      <div className="App">
			<Switch>
				<Route exact path="/" render={()=>
					<Editor
					inputMood={inputMood}
					getInputDate={getInputDate}
					getInputMessage={getInputMessage}
					getInputMood={getInputMood}
					saveDate={saveDate}
					resetEditorInfo={resetEditorInfo}
						/>
				} />
				<Route path="/moodCalendar" render={()=>
							<Calendar
							resetEditorInfo={resetEditorInfo}
							calendarMoodArray={calendarMoodArray}
							/>
				} />
				</Switch>
      </div>
    );
  }
}

export default App;
