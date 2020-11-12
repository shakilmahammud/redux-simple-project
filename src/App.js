import React from 'react';
import { createStore } from "redux";
import postReducer from "./components/store/reducers/PostReducer";
import { Provider } from "react-redux";
import { Home } from './components/Home/Home/Home';

const store = createStore(postReducer);

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
