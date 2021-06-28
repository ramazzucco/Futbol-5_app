import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components.
import Index from './components/Index';
import Page from "./components/page/Page";

function App() {
    return (
        <Router>
            <Route path='/app'>
                <div className="App">
                    <Index />
                </div>
            </Route>
            <Route path='/page'>
                <div className="Page">
                    <Page />
                </div>
            </Route>
        </Router>
    );
}

export default App;
