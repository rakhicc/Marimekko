import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
  return (
   <Router>
       <Switch>
           <ul>
               <li>
                   Home
               </li>

               <li>
                   Log in
               </li>
               <li>
                   Sell
               </li>
               <li>
                   Products
               </li>
               <li>
                   Search
               </li>
           </ul>


       </Switch>
       </Router>
  );
}

export default App;
