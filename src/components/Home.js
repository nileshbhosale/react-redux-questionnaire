import React from "react";
import Questionare from "./common/Questionare";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Questionare/>
      </div>
    );
  }
}