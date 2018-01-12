import {RECIEVE_IMAGE_LIST} from '../constants/frontEndConstants';



export function getImageList(params) {

  var promiseObject = ajaxUtil(params);
  return dispatch => {
   return (promiseObject).then(response => {
    dispatch(recieveImageList(response));
  }).catch(response => console.log(response));
 }
}

export function recieveImageList(data){
	return {
    type: RECIEVE_IMAGE_LIST,
    data
  }
}




function ajaxUtil(params){
	var promiseObject = new Promise(function(resolve,reject){
    	var req, formData;
      req = new XMLHttpRequest();
      formData= params.formData? JSON.stringify(params.formData):null;
    	req.open(params.method, params.url);

    	req.onload = function(){
    		if (req.status >= 200 && req.status < 300){
          var response = JSON.parse(req.response,req.status);
          resolve(response);
      	}
      	else {
          reject(req.statusText);
      	}
    	};

    	req.onerror = function(err) {
          reject('Error in AJAX call');    	
      };
      req.setRequestHeader('Content-Type', params.contentType || "application/json"); 
      req.setRequestHeader('Accept', params.accept || "application/json");

     
       
    	req.send(formData);
	});
	return promiseObject;
}

