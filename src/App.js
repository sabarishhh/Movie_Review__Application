
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contactus'
import About from './components/About'
import Searchb from './components/Searchb'
import Wishlist from './components/wishlist'


function App() {

    return (
        <div className="App">
            <div className="navivbar">
          
                <p> Movie Review </p>
          
            </div>
            <main>

                <Router>
                    <Navbar />
                    <Route path="/searchb">
                        <Searchb />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/wishlist">
                        <Wishlist />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Router>

            </main>
        </div>
    );
}

export default App