import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();




// App component
class App extends React.Component {
  // pre-render logic
  componentWillMount() {
    this.props.dispatch({type: 'FETCH_DATA'});
    
  }
 
  // render
  render() {
    const {children} = this.props;
    return (
      <MuiThemeProvider>
        <div className="container">
          
          <div>
            {children}
          </div>
          
        </div>
      </MuiThemeProvider>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  console.log("called");
  return {
    questions: state.data.questions || [],
  };
}
export default connect(mapStateToProps)(App);
