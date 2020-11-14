import React, {useState} from 'react';
import {CardsLeftContext, OrderContext} from "./CardsLeftContext";
const OrderProvider = (props) => {
    const [actualOrder,setActualOrder] = useState(1)

    return (
        <OrderContext.Provider value={{actualOrder,setActualOrder}}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderProvider;