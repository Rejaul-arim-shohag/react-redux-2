import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/counter/action';
const HooksCounter = () => {
    const count = useSelector((state)=>state.counter.value)
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
            <button onClick={handleIncrement}>Incremnt</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};
export default HooksCounter;

