import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Page/Home';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
     <>
     <Provider store={store}>
      <BrowserRouter>
      <Header/> 
       <Routes>
        <Route path="/" element={<Home/>}></Route>
       </Routes>
      </BrowserRouter>
      </Provider>
     </>
  );
}

export default App;
