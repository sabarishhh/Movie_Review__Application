import React from 'react'

function Search({ handleInput ,search}){
    return(
        <section className="search-warp">
            <input type="text" placeholder="enter movie name..." 
            className="searchbox" 
            onChange={handleInput}
            onKeyPress={search}/>
            </section>

    );
}

export default Search