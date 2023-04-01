
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { AddEmp } from './commponents/AddEmp';
import { Footer } from './commponents/Footer';
import { Heder } from './commponents/Heder';
import { ListEmployee } from './commponents/ListEmployee';

function App() {
  return (
    <div className="App">
    <Router>
    <Heder/>
<Routes>
          <Route exact path="/" Component={ListEmployee}/>
          <Route exact path="/home" Component={ListEmployee}/>
          <Route exact path="/add-emp" Component={AddEmp}/>
         
</Routes>


  
    <Footer/>
    </Router>
      {/* <ListEmployee/> */}
      
    
    </div>
  );
}

export default App;
