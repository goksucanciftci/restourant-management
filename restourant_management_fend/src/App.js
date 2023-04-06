import "./App.css";
import CustomerComponent from "./components/CustomerComponent.js";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddCustomer from "./components/AddCustomer";
import UpdateCustomer from "./components/UpdateCustomer";
import WorkerComponent from "./components/WorkerComponent";
import AddWorker from "./components/AddWorker";
import UpdateWorker from "./components/UpdateWorker";
import FoodComponent from "./components/FoodComponent";
import AddFood from "./components/AddFood";
import UpdateFood from "./components/UpdateFood";
import GetCustomer from "./components/GetCustomer";
import Main from "./components/Main";


function App() {
  return (
    <BrowserRouter>
      <div class="collapse" id="navbarToggleExternalContent ">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark ">
        <div class="container-fluid d-flex justify-content-center">
          <h2 class="text-white p-2 ">Restaurant Management</h2>
        </div>
      </nav>
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/customer" component={CustomerComponent} />
          <Route exact path="/create-customer" component={AddCustomer} />
          <Route exact path="/update-customer/:id" component={UpdateCustomer} />
          <Route exact path="/get-customer" component={GetCustomer}/>

          <Route exact path="/worker" component={WorkerComponent}/>
          <Route exact path="/create-worker" component={AddWorker}/>
          <Route exact path="/update-worker/:id" component={UpdateWorker}/>

          <Route exact path="/food" component={FoodComponent}/>
          <Route exact path="/create-food" component={AddFood}/>
          <Route exact path="/update-food/:id" component={UpdateFood}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
