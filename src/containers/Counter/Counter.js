import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
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
        console.log(this);
        return (
            <div>
                <CounterOutput value={this.props.newCounter} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter} />
                <CounterControl label="DecrementAdd" clicked={ this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={ this.props.onIncrement5Counter} />
                <CounterControl label="Subtract 5" clicked={ this.props.onDecrement5Counter} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  /> */}
            </div>
        );
    }
}

// this state is redux state
const mapStateToProps = state => {
    console.log(state);
    return {
        newCounter : state.counter
    }
};

const mapDispatchToProps = (dispatch)=>{
    console.log(dispatch);
    return {
        onIncrementCounter: () => dispatch({type : 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type : 'DECREMENT'}),
        onIncrement5Counter: () => dispatch({type : 'ADD5'}),
        onDecrement5Counter: () => dispatch({type : 'SUBTRACT5'}),
    };
}

// use connect to reach stores
export default connect(mapStateToProps, mapDispatchToProps)(Counter);