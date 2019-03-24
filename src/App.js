import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
			<section className="Editor">
				<div className="Editor__info--container">
					<label htmlFor="date" className="editor__date--label">
						Date:
					</label>
					<input id="date" type="date" className="editor__date--input" placeholder="21/04/2018" />
					<label htmlFor="mood" className="editor__mood__label">
						Mood:
					</label>
					<input className="good__mood editor__mood--input" type="radio" name="good__mood" value=":)" />:)
					<input className="bad_mood editor__mood--input" type="radio" name="bad__mood" value=":(" />:(
						<p className="textarea__title">Message:</p>
						<textarea name="textarea" rows="2" cols="50" placeholder=" Why is such a good day?"></textarea>
				</div>
				<div className="editor__button--container">
						<button className="btn btn__save" type="button">Save</button>
						<button className="btn btn__cancel" type="button">Cancel</button>
				</div>
			</section>
			<section className ="Calendar">
				<div className="Calendar__container"></div>
			</section>
			<section className="calendar">
			<div className="calendar__add"> + </div>
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
