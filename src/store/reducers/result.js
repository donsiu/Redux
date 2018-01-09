import * as actionTypes from '../actions';

const initialState = {
    results :[]
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            //traditional way
             const id = action.index;
            // let newResult = [...state.results];
            // newResult.splice(id, 1);

            //Filter 
            const updatedArray = state.results.filter((result, index) => id !== result.id);
            return{
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;




