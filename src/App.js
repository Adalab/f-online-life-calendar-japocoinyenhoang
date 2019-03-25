import React, { Component } from 'react';
import './App.css';

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
		const {getInputDate, getInputMood, getInputMessage, resetEditorInfo, saveDate}=this;
    return (
      <div className="App">
			<section className="Editor">
				<div className="Editor__info--container">
					<label htmlFor="date" className="editor__date--label">
						Date:
					</label>
					<input id="date" type="date" className="editor__date--input" placeholder="21/04/2018" onChange={getInputDate} />
					<label htmlFor="mood" className="editor__mood__label">
						Mood:
					</label>
					<input className="good__mood editor__mood--input" type="radio" name="good__mood" value=":)" onChange={getInputMood} />:)
					<input className="bad_mood editor__mood--input" type="radio" name="bad__mood" value=":(" onChange = {getInputMood} />:(
						<p className="textarea__title">Message:</p>
						<textarea name="textarea" rows="2" cols="50" placeholder=" Why is such a good day?" onKeyUp={getInputMessage}></textarea>
				</div>
				<div className="editor__button--container">
						<button className="btn btn__save" type="button" onClick={saveDate}>Save</button>
						<button className="btn btn__cancel" type="button" onClick={resetEditorInfo}>Cancel</button>
				</div>
			</section>
			<section className ="Calendar">
				<div className="Calendar__container"></div>
			</section>
			<section className="calendar">
			<div className="calendar__add" onClick={resetEditorInfo}> + </div>
			<div className="calendar__result--container">
						<ul className="calendar__result">
							<li className="calendar__result--face">:P</li>
						</ul>
			</div>
			</section>

      </div>
    );
  }
}

export default App;
