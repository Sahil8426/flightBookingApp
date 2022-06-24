import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Book } from "./components/Pages/Book";
import { Register } from "./components/Pages/Register";
import { Contact } from "./components/Pages/Contact";
import {Login} from "./components/Pages/Login";
import {noti} from "./components/Pages/noti";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Book} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/noti" component={noti} />

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
