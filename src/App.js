import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './Components/Counter/Counter';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter id="1"/>
      </div>
    </Provider>
  );
}

export default App;
