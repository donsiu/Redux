import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0,
        results: []
    }
    
    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                break;
        }
    }

    render () {
        console.log(this.props);
        return (
            <div>
                <CounterOutput value={this.props.newCounter} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter} />
                <CounterControl label="DecrementAdd" clicked={ this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={ this.props.onIncrement5Counter} />
                <CounterControl label="Subtract 5" clicked={ this.props.onDecrement5Counter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.newCounter)}>Store Result</button>
                <ul>
                    {
                    this.props.storedResults.map((result, index, self) => 
                    (<li key= {result.id} onClick={() => this.props.onDeleteResult(result.id) }>{result.value}</li>
                    ))
                    }
                </ul>
                
                {/* Obsolete */}
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
            </div>
        );
    }
}

// this state is redux state
const mapStateToProps = state => {
    return {
        newCounter : state.ctr.counter, //
        storedResults : state.res.results
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        onIncrementCounter: () => dispatch({type : actionTypes.INCREMENT, val: 1}),
        onDecrementCounter: () => dispatch({type : actionTypes.DECREMENT, val: 1}),
        onIncrement5Counter: () => dispatch({type : actionTypes.ADD5, val: 5}),
        onDecrement5Counter: () => dispatch({type : actionTypes.SUBTRACT5, val: 5}),
        onStoreResult: (result) => {
            console.log(result);
            dispatch({type : actionTypes.STORE_RESULT, result : result});
        },
        onDeleteResult: (id) => dispatch({type : actionTypes.DELETE_RESULT, index: id }),
    };
}

// use connect to reach stores
export default connect(mapStateToProps, mapDispatchToProps)(Counter);