import React from 'react';
import PropTypes from 'prop-types';
import Selection from './Selection'
import { Card, ListGroup } from 'react-bootstrap';

function Month(props){
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Header>{props.month}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.selection.map((sel, i) => <li key={i}>{sel}</li>)}</ListGroup.Item>
        </ListGroup>
      </Card>
      <br/>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired

};

export default Month;
