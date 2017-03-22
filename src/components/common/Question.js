import React, { PropTypes } from "react";
import { connect } from "react-redux";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


// Question Element component
class Question extends React.Component {

	  // constructor
  constructor(props) {
    super(props);
    // bind <this> to the event method
    this.handleChange = this.handleChange.bind(this);
  }

  //handle change of answer
  handleChange(event){
  	// delete the user
    this.props.dispatch({
      type : 'UPDATE_VALUE',
      id : this.props.id,
      value : Number(event.target.parentElement.parentElement.parentElement.dataset.id)
    });
  }

  // render
  render() {
    return (
    	<div>
    		
    		<Card>
				<CardHeader 
			      title={this.props.question}/>
					<CardText>
						<SelectField
				          floatingLabelText="Select Year"
				          value={this.props.value}
				          errorText={this.props.errorText && this.props.errorText}
				          onChange={this.handleChange}
				        >
				   			<MenuItem value={null} data-id={0} primaryText="" />
					        {this.props.options.map(function(option){
				    			return <MenuItem key ={option.id} data-id={option.id} value={option.id} primaryText={option.option}/> ;
				       		})}
				        </SelectField>
			        </CardText>
			</Card>
	        
    	</div>
    );
  }
}

export default connect()(Question);