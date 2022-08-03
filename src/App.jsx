import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
<link
   rel="stylesheet"
   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
></link>;

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />

            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>

               <Route path="/aboutme">
                  <About />
               </Route>

               <Route path="/skillss">
                  <Skills />
               </Route>

               {/* <Route path="/projectss">
              <Projects/>
              </Route> */}

               <Route path="/contactss">
                  <Contact />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
