export const addToCart=(itemAmount)=>{
   return(dispatch)=>{
    dispatch({
        type : 'addtocart',
        payload : itemAmount
    })
   }
}

export const removeFromCart=(itemAmount)=>{
    return(dispatch)=>{
        dispatch({
            type : 'removefromcart',
            payload : itemAmount
        })
       }
}