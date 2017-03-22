import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

import { connect } from "react-redux";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Question from "./Question";
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
// User List Element component
class QuestionList extends React.Component {

		  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.clearAnswers = this.clearAnswers.bind(this);
    this.submitAnswers = this.submitAnswers.bind(this);
  }

  clearAnswers(event){
  	this.props.dispatch({type: 'FETCH_DATA'});
  }
  submitAnswers(event){
  	this.props.dispatch({type: 'CALCULATE_RESULT'});
  }
  // render
  render() {
    return (
    	<div>
    		{this.props.questions.map(function(question){
    			return <div key={question.id}>
    					<Question 
    					id={question.id}
    					errorText={question.errorText} 
    					question={question.question} 
    					options={question.options}
    					value={question.value}/>
    					</div> 
    		})

    		}

   			 <RaisedButton label="Submit" primary={true} style={style} onClick={this.submitAnswers} />
    		<RaisedButton label="Clear" style={style} onClick={this.clearAnswers}/>
    	</div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
	console.log("asdasd");
    console.log(state.data.questions);
  return {
    questions: state.data.questions,
  };
}
export default connect(mapStateToProps)(QuestionList);