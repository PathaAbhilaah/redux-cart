const amountReducer=(state=0,action)=>{
    if(action.type=="addtocart"){
        return state+action.payload
    }
    else if(action.type==="removefromcart"){
        return state-action.payload
    }
    else{
        return state;
    }
}

export default amountReducer;