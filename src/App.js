import TopBar from "./components/TopBar/TopBar";
import Home from "./Pages/home/Home";
import { BrowserRouter, Switch, Route,Redirect} from 'react-router-dom'
  


function App() {
  return (
   <BrowserRouter>
   
    <TopBar/>
 

 <Switch>
  <Route path="/">
  <Home/>
<Redirect to='/home'></Redirect>

  </Route>
  </Switch>


</BrowserRouter>

  ); 
}

export default App;

