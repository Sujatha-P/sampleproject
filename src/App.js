
import './App.css';
import Header from './Components/Header';

import Sidebar from './Components/Sidebar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Body from './Components/Survey1';
import Survey from './Components/Survey';



function App() {
  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='d-flex justify-content-between'>

        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main'>
        <Body />
        <Survey />
        
        </div>

      </div>

    </div>
  );
}

export default App;
