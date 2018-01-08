//Flow: Component => dispatch => Action => reaches => Reducer => update => Central Store => trigger => Auto Subscription
const redux = require('redux');  // this is nodejs import
const createStore = redux.createStore;
const initialState = {
    counter: 10,
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter : state.counter + 1,
        }
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter : state.counter + action.value
        }
    }

    return state;
};

//Store // store needs to initialize with reducer
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
store.subscribe(()=>{
    console.log('subscription: ' + store.getState());
});

//Dispatch Action
store.dispatch({type: 'INC_COUNTER'}); //must uppercase convention
store.dispatch({type: 'ADD_COUNTER', value: 10, payload: 'hello'});
console.log(store.getState());