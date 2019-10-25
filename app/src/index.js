import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import Dashboard from './components/dashboard'
import {createBrowserHistory} from 'history'


// function Routes() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route path="/" component={Home}>
//             <Redriect from='/blog/' to="/tutorials/" />
//             <Route path="/tutorials/" component={About} />
//       </Switch>
//     </div>
//   </Router>
//       )
//     }

    
    
    ReactDOM.render(
  <App />,
      document.getElementById("root")
    );
    
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
