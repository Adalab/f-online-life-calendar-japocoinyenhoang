import React, {Component} from "react";
import {Link} from 'react-router-dom';
import '../stylesheets/Editor.scss';

class Editor extends Component {
	render() {
		const {getInputDate, getInputMessage, getInputMood, saveDate,resetEditorInfo, inputMood} = this.props;
		return (
			<section className="editor">
				<div className="editor__info--container">
					<label htmlFor="date" className="editor__date--label">
						Date:
					</label>
					<input id="date" type="date" className="editor__date--input" placeholder="21/04/2018" onChange={getInputDate} value={getInputDate}/>
					<label htmlFor="mood" className="editor__mood__label">
						Mood:
					</label>
					<input className="good__mood editor__mood--input" type="radio" name="good__mood" value="goodMood" onChange={getInputMood} />:)
					<input className="bad_mood editor__mood--input" type="radio" name="bad__mood" value="badMood" onChange = {getInputMood} />:(
						<p className="textarea__title">Message:</p>
						<textarea name="textarea" className="textarea__input" placeholder=" Why is such a good day?" onKeyUp={getInputMessage}></textarea>
				</div>
				<div className="editor__button--container">
				<Link to='/moodCalendar'>
						<button className="btn btn__save" type="button" onClick={saveDate}>Save</button>
				</Link>
						<button className="btn btn__cancel" type="button" onClick={resetEditorInfo}>Cancel</button>
				</div>
			</section>
		);
	}
}

export default Editor;
