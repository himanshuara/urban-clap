
import React  from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component{ 

    constructor(props){
      super(props);
      this._createHTML =  this._createHTML.bind(this);
      this._onPageClick = this._onPageClick.bind(this);
    }

    _onPageClick(page){
      this.props.pageClickCallback(page);
    }
    _createHTML(){
      var page = [];
      var totalPage = this.props.totalPage
        for (let i = 1; i <=totalPage; i++) {
            page.push(<a href="javascript:void(0)" className={this.props.selectedPage === i ? "selected" :""} onClick={()=>this._onPageClick(i)} key={i+1} >{i}</a>);
        }
        return page;
    }

    render(){
      var totalPage = this._createHTML();
      return (
       <div >
       {totalPage}
       </div>
       );
    }
  };

 Pagination.propTypes={
  pageClickCallback:PropTypes.func,
  totalPage:PropTypes.number
}
export  default Pagination;