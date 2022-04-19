import { createStore } from 'redux';


const IncrementCount = ({incrementBy = 1}={})=>({
    type: 'INCREMENT',
    incrementBy

});

const DecrementCount = ({decrementBy = 1}={})=>({
  type: 'DECREMENT',
  decrementBy

});
const SetCount = ({count = 0}={})=>({
  type: 'SET',
  count

});

const ResetCount = ({count = 0}={})=>({
  type: 'RESET',
  count

});

const countReducer=(state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':   
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count:action.count
      };
    default:
      return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(IncrementCount({incrementBy: 5}));
store.dispatch(DecrementCount({decrementBy: 100}));
store.dispatch(SetCount({count: 101}));
store.dispatch(ResetCount({count: 100}));



