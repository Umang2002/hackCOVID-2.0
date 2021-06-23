
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Prevent from './components/Prevention/Prevent'
import {Route,Switch} from 'react-router-dom'

import Symptoms from './components/Symptoms/Symptoms';
import Precautions from './components/Precautions/Precautions';
import Tracker from './components/tracker/Tracker';

function App() {
  return (
    <div className="App">
        <Navbar />
        {/* <Home />
        <Prevent />
        <Symptoms />  */}
       
            
            <Route path='/' exact  component={Home}/>
            <Route path='/' exact component={Prevent}/>
            <Route path='/' exact component={Symptoms} />
            <Route path='/' exact component={Precautions} />
            <Route path='/' exact component={Tracker} />
            <Route path ='/prevent'  component={Prevent} />
            <Route path ='/symptoms'  component={Symptoms} />
            <Route path ='/precautions'  component={Precautions} />
            <Route path ='/tracker'  component={Tracker} />
 



    </div>
  );
}

export default App;
