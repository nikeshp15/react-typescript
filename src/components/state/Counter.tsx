import React, { useReducer } from 'react'

type CounterState = {
    count: number
}
type CounterAction = {
    type: 'increment' | 'decrement' | 'reset'
}

const initialState = { count: 0 };

function counterReducer(currentState: CounterState, action: CounterAction): CounterState {
    switch(action.type) {
        case 'increment': 
            return {...currentState, count: currentState.count + 1};
        case 'decrement':
            return {...currentState, count: currentState.count - 1};
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
}

export const Counter = () => {
    const [count, countDispatch ] = useReducer(counterReducer, initialState)
  
    return (
        <div>
            <div>Count : {count.count}</div>
            <button onClick={() => countDispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => countDispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => countDispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}
