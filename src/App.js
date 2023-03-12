import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './Components/Counter/Counter';
import HooksCounter from './Components/Counter/HookCounter';
import DynamicHooksCounter from './Components/Counter/DynamicHooksCounter';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter id="1"/> */}
        <HooksCounter/>
        <DynamicHooksCounter/>
      </div>
    </Provider>
  );
}

export default App;
