
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
         <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/newappointment" component={NewAppointment} />
          <Route exact path="/editappointment/:id" component={EditAppointment} />
          <Route exact path="/patient/:id" component={Patient} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
