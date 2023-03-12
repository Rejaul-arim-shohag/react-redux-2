import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/dynamicHooksCounter/action';
const DynamicHooksCounter = () => {
    const count = useSelector((state)=>state.dynamicCounter.value)
    const disPatch = useDispatch()
    const handleIncrement = (value)=>{
        disPatch(increment(value))
    }
    const handleDecrement = (value)=>{
        disPatch(decrement(value))
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>handleIncrement(100)}>Incremnt</button>
            <button onClick={()=>handleDecrement(50)}>Decrement</button>
        </div>
    );
};
export default DynamicHooksCounter;

