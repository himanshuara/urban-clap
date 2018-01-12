import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageTile from './components/imageTile.js';
import Pagination from './components/pagination.js'

import {getImageList} from './actions/actions.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
constructor(props) 
   {  
    super(props);
    this.state={
      pageData:[],
      pageNum:1,
      pageSize:24
    }
    this._handleScroll = this._handleScroll.bind(this);
    this._pageClickCallback= this._pageClickCallback.bind(this);
    this._handlePageSize = this._handlePageSize.bind(this);
  }

_handleScroll(){
  const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  const body = document.body;
  const html = document.documentElement;
  const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
  const windowBottom = windowHeight + window.pageYOffset;
  const params = {
          "url":"https://www.urbanclap.com/api/v1/seo_media/getSeoImages",
          "method":"POST",
          "formData":{
             "page_number":this.state.pageNum +1,
            "no_fetch_filters":false,
            "url":"https://www.urbanclap.com/weddings/ideas/candid-photography"
          }
        }
    if (windowBottom >= docHeight) {
      this.props.getImageList(params);
    } 
}

componentDidMount(){
  var params = {
          "url":"https://www.urbanclap.com/api/v1/seo_media/getSeoImages",
          "method":"POST",
          "formData":{
             "page_number":this.state.pageNum,
            "no_fetch_filters":false,
            "url":"https://www.urbanclap.com/weddings/ideas/candid-photography"
          }
        }
  this.props.getImageList(params);
  //window.addEventListener("scroll", this._handleScroll);
}
componentWillUnmount() {
    //window.removeEventListener("scroll", this.handleScroll);
}

componentWillReceiveProps(nextProps){
  this.setState({
    pageData:nextProps.pageData
  })
}

_pageClickCallback(page){
  this.setState({
    pageNum:page
  },function(){
    let params = {
          "url":"https://www.urbanclap.com/api/v1/seo_media/getSeoImages",
          "method":"POST",
          "formData":{
             "page_number":this.state.pageNum,
            "no_fetch_filters":false,
            "url":"https://www.urbanclap.com/weddings/ideas/candid-photography"
          }
        }
  this.props.getImageList(params);
  })
  
}
_handlePageSize(event){
   var pageSize = event.target.value,
   calls = (pageSize / 24);
   this.setState({
    pageSize:pageSize,
    pageNum:1
  },function(){
    
    let params = {
          "url":"https://www.urbanclap.com/api/v1/seo_media/getSeoImages",
          "method":"POST",
          "formData":{
             "page_number":this.state.pageNum,
            "no_fetch_filters":false,
            "url":"https://www.urbanclap.com/weddings/ideas/candid-photography"
          }
        }
  /*for(let i=0; i<calls ;i++){
      this.props.getImageList(params);
  }*/

  
  })
}

  render() {
    var {pageData} =this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to UrbanClap</h1>
        </header>
        <div className="pageSizeDDWrap">
        <select value={this.state.pageSize} onChange={this._handlePageSize}>
            <option value="24">24</option>
            <option value="48">48</option>
            <option value="72">72</option>
          </select>
        </div>
        <div className="img-container">
        {pageData.map(function(data, index){
                    return (<ImageTile key={index}>
                      <div className={"display-inline-b"}>
                        <img src={data.url} alt={data.alt} height="100" width="100"/>
                      </div>
                    </ImageTile>);
        })}
        </div>
        <div className="pagination">
          <Pagination totalPage={10} selectedPage={this.state.pageNum} pageClickCallback={this._pageClickCallback}/>
        </div>
        
      </div>
    );
  }
}
 function mapStateToProps(state,ownProps) {
   return {
    pageData:state.pageReducer.pageData
  }
} 
/**
 * Function to dispatch action values as props
 */
 function mapDispatchToProps(dispatch){
  return {
    getImageList:function(params){ dispatch(getImageList(params)); }
  }
};
//export default App;

export  default connect(mapStateToProps,mapDispatchToProps)(App);
