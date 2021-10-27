import React from 'react';
import './Topbar.css';

const Topbar = ({search, setSearch, backToTrend, isSearch, searchSubmit}) => {
     const handleChange = (s) => {
        setSearch(s.target.value);
     }

    return (
        <div className='top-bar' >
            <h1>Movie Sea</h1>
            <form className='search-form' onSubmit={searchSubmit}>
                <input placeholder='Search...' value={search} onChange={handleChange}/>
                {
                    search.length > 0  ?
                    <p className='search-cross' onClick={() => backToTrend()} >X</p>
                    :
                    <img
                        src={'https://th.bing.com/th/id/R.fbae630ae69a045d25f1e68d4a7cff26?rik=teh46lsnOm9mMQ&pid=ImgRaw&r=0'} 
                        alt='S'/>
                }
            </form>
        </div>
    );
}

export default Topbar;
