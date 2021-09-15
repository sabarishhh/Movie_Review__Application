import React,{useState} from 'react'
import Search from './Search'
import Results from './Results'
import axios from 'axios'

import './index.css'

import Popup from './Popup'

function Searchb(){
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

    const openPopup = id =>{
        axios(apiurl + "&i=" + id).then(({data})=>{
            let result=data;

            setState(prevState =>{
                return {...prevState,selected: result }
            });
        });
    }

    const closePopup = () =>{
        setState(prevState =>{
            return{...prevState,selected:{}}
        });
    }
    return(
        <div className="App">
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results}  openPopup={openPopup}/>
        {(typeof state.selected.Title !="undefined") ? <Popup selected={state.selected} closePopup=
        {closePopup} /> : false}
        </div>
    )
}

export default Searchb;