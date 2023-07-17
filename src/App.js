import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions/index';


function App() {
  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <div className="container">
        <h1>Increament and Decrement in Redux</h1>
        <div className="quantity">
          <span className='btn' onClick={()=>{dispatch(incNumber())}}>+</span>
          <input type="text" value={myState}/>
          <span className='btn' onClick={()=>{dispatch(decNumber())}}>-</span>
        </div>
      </div>
    </div>
  );
}

export default App;
