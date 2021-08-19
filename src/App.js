import React,{useState} from 'react'
import Search from './components/Search'
import Results from './components/Results'
import axios from 'axios'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './index.css'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Insert from './components/Insert'

function App(){
    const [state,setState] =useState({
        s:"",
        results:[],
        selected:{}
    });
    const apiurl = "http://www.omdbapi.com/?apikey=73a235a9";

    const search =(e) => {
        if(e.key === "Enter"){
            axios(apiurl +"&s=" + state.s).then(({data}) => {
                let results = data.Search;
                setState(prevState =>{
                return {...prevState, results: results }
                })

            });
            }
    }

    const handleInput= (e) => {
    let s = e.target.value;

    setState(prevState =>{
        return { ...prevState,s: s}
    });
console.log(state,s);
    }
    return(
        <div className="App">
        <header>
      <h1> Movie Review </h1>
        </header>
        <main>
        
           <Router>
               <Navbar />
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} />
        <Route path="/Insert">
            <Insert />
        </Route>
        <Route path="/signup">
                <Signup />
            </Route>
            </Router>
        </main>
        </div>
    );
    }

    export default App