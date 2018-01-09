import * as actionTypes from '../actions';

const initialState = {
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
    }
    return state;
}

export default reducer;