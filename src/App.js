import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NavbarMenu from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Switch>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
      </Switch>
    </div>
  );
}

export default App;
