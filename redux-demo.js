const redux = require("redux");

// reducer function recieves two things inputs -> old state + dispatched action and then return a new state object so a 
// reducer function should only be used to deal with inputs and types provided by the redux and then proceed with any of the
// work with them ti give a new state object 
const counterReducer = (state = {counter:0} , action)=>{

if(action.type==="increment"){
    return{
        counter: state + 1
    };
}
if(action.type==="decrement"){
    return{
        counter: state - 1,
    };
}
if(action.type==="INCREMENTBY2"){
    return{
        counter: state + 2,
    };
}
if(action.type==="DECREMENTBY2"){
    return{
        counter: state - 2,
    };
}

return state;
    
};

const store = redux.createStore(counterReducer)


// till here we got a store and a reducer function but now we also need someone who subscribes to our store 
const counterSubscriber = () =>{
    // this getState function that is called on our store , will give us the latest state after it was updated 
    const latestState = store.getState();
    console.log(latestState);
}

//we now use subscribe function to make this subscriber -> subscribe to our store and its important to note that we don't execute 
// it->counterSubscriber() here  we just point at it as both the subscriber and the reducer functions will be executed by redux  
store.subscribe(counterSubscriber)

// creating and dispatching an action 
store.dispatch({type:"increment"}); 
store.dispatch({type:"decrement"}); 
store.dispatch({type:"INCREMENTBY2"}); 
store.dispatch({type:"DECREMENTBY2"}); 

