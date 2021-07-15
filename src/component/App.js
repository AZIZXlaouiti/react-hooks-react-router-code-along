import React from "react";
import Login from "./Login"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import {Route, Switch} from "react-router-dom"


function App(){
 return(
  <div>
  <Navbar/>
   <Switch>
   <Route exact path="/" component={Home}>
      </Route>  
     
     <Route  path="/about"exact component={About}>
     </Route>  
     
     <Route  path="/login" component={Login}>
     </Route>  
     <Route  path="/" render={()=><div>404 Not Found</div>}>
     </Route>  
   </Switch>
     </div>
 )
}
export default App