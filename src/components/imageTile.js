
import React  from 'react';
import PropTypes from 'prop-types';

class ImageTile extends React.Component{ 

    render(){
      return (
       <div >
       {this.props.children}
       </div>
       );
    }
  };
/**
 * [Passing Router to component through context]
 * @type {Object}
 */
 ImageTile.propTypes={
  children:PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
    ])
}
export  default ImageTile;