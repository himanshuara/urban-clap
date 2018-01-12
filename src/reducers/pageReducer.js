import {DISPLAY_DATA,RECIEVE_IMAGE_LIST} from '../constants/frontEndConstants.js'

/**
 * [loader reducer function to set isLoading state]
 * @param  {Object} state  [state tree of the current reducer]
 * @param  {[type]} action [action that called the reducer]
 * @return {[object]}        [returns updated state object]
 */
export function pageReducer(state = {}, action) {
    switch (action.type) {

        
        case RECIEVE_IMAGE_LIST:
            //let oldPageData = state.pageData || [];
            let pageData = action.data.success.data.media;//oldPageData.concat(action.data.success.data.media)
            return Object.assign({}, state, {
                pageData,
                "dataModified":true
            })
        default:
            return state
    }
}
