import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/counter/action';
const Counter = ({count, increment, decrement, id}) => {
    return (
        <div>
            <p>{count}</p>
            {id}
            <button onClick={increment}>Incremnt</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};
//mapStateToProps: state k props a convert kore dey
//tar mane take a aghe state k pete hobe , so ekhon question eta k korbe?
// jokhn connect() er modde mapStateToProps pathiye dibo tokhn redux e map mapStateToProps er modde state ta pathiye dibo
const mapStateToProps=(state, ownProps)=>{
    console.log("ownProps", ownProps)
    //jehtu amader component sob somay props akare object pay so ekhan theke object retun korte hobe
    return {
        count : state.value
    }
}

// mapDispacthToProps : dispatch k props a convert kore dey
const mapDispatchToProps=(dispatch, ownProps)=>{
    console.log("ownProps mapDispatchToProps", ownProps)
    return{
        increment: (value)=>dispatch(increment(value)),
        decrement: (value)=>dispatch(decrement(value))
    }
}

// aey duita fucntion Counter Component k state gulo pete help korbe
export default connect(mapStateToProps, mapDispatchToProps)(Counter)