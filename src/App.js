import Home from './components/Home';
import  AddUser  from './components/AddUser';
import {EditUser} from './components/EditUser';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {GlobalProvider} from './context/GlobalState';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "0rem auto" }}>
    <GlobalProvider>
    <Router>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/add" component={AddUser}/>
         <Route path="/edit/:id" component={EditUser}
          />
       </Switch>
     </Router>
     </GlobalProvider>
    </div>
  );
}

export default App;
