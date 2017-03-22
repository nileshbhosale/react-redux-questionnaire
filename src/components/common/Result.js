import React, { PropTypes } from "react";
import BarChart from 'react-bar-chart';
import { connect } from "react-redux";

const margin = {top: 20, right: 20, bottom: 30, left: 40};

// Result Bar Chart Element component
class Result extends React.Component {

  // render
  render() {
    return (  	

			<BarChart ylabel='Result'
                  width={this.props.width}
                  height={this.props.height}
                  margin={margin}
                  data={!this.props.result && (this.props.hasError == true) ?[]:this.props.result}/>
	        
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    result: state.data.result,
    hasError: state.data.hasError,
    width:window.screen.width<500?350:500,
    height:window.screen.width<500?300:400
  };
}
export default connect(mapStateToProps)(Result);