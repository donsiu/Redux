import * as actionTypes from './actions';

const initialState = {
    results :[],
    counter : 0
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state); // new state object 
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter : state.counter - action.val
            }
        case actionTypes.ADD5:
            return{
                ...state,
                counter : state.counter + action.val
            }
        case actionTypes.SUBTRACT5:
            return{
                ...state,
                counter : state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            console.log(state.counter);
            console.log(state.results);
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
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




