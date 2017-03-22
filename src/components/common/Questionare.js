import React, { PropTypes } from "react";
import { Link } from "react-router";
import QuestionList from "./QuestionList";
import Result from "./Result";
import {Grid, Col, Row, PageHeader} from "react-bootstrap";


// User List Element component
export default class Questionare extends React.Component {

  // render
  render() {
    return (
    	<div>
       <Grid>

         <Row className="show-grid">
          <Col xs={12} md={12} > <PageHeader>Cricket Trivia</PageHeader></Col>
         </Row>

        <Row className="show-grid">
          <Col sm={6} md={6}><QuestionList/></Col>

        
          <Col sm={6} md={6}><Result/></Col>
        </Row>
    		
        </Grid>

        
    	</div>
    );
  }
}