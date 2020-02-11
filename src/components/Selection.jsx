import React from 'react';
import PropTypes from 'prop-types';

function Selection(props){
  return (
    <div>
      <p><em>{props.product}</em></p>
      <hr/>
    </div>
  );
}

Selection.propTypes = {
  product: PropTypes.string.isRequired
};

export default Selection;
