 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Cart from "./CardSubmitBar/Pages/Cart";
import Payment from "./CardSubmitBar/Pages/Payment";
import Review from "./CardSubmitBar/Pages/Review";
import Service from "./CardSubmitBar/Pages/Service";
import ShippingInfo from "./CardSubmitBar/Pages/ShippingInfo ";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/User.Auth/Login";
import Register from "./Components/User.Auth/Register";
import AuthProvider from "./Firebase/Context/AuthProvider";
import AboutRobograding from './Page/AboutRobograding';
import DashboardHed from "./Page/DashboardHed";
import FeedCardDtl from "./Page/FeedCardDtl";
import FeedDashboardPage from "./Page/FeedDashboardPage";
import Home from './Page/Home';
import Priceing from './Page/Priceing';
import WhyRobograding from './Page/WhyRobograding';
 
function App() {
  return (
    <div className="App">
         <AuthProvider>
         <Router>
          <Switch>
            <Route exact path="/" component={Home}/>  
            <Route path="/home" component={Home}/>  
            <Route path="/about-robograding" component={AboutRobograding}/>  
            <Route path="/robograding" component={WhyRobograding}/>  
            <Route path="/Priceing" component={Priceing}/>  
            <PrivateRoute path="/dashboard" component={DashboardHed}/>  
            <Route path="/feed" component={FeedDashboardPage}/> 
            <Route path="/login" component={Login}/>  
            <Route path="/register" component={Register}/>  
            <PrivateRoute path="/Service" component={Service}/>
            <PrivateRoute path="/cards" component={Cart}/>
            <PrivateRoute path="/payment" component={Payment}/>
            <PrivateRoute path="/shipping" component={ShippingInfo}/>
            <PrivateRoute path="/review" component={Review}/>
            <PrivateRoute path="/:cardID" component={FeedCardDtl}/>  
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
         </AuthProvider>
    </div>
  );
}

export default App;
