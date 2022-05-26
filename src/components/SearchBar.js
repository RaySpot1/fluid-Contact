import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchList from './SearchList';
import './SearchBar.css';


const SearchBar = () => {
    // const [contacts, setContacts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    
    const contacts = useSelector(state => state);
    const myContacts = [...contacts]

    const filteredContacts = (searchtextvalue) => {
        let results = searchtextvalue === "" ? [] : myContacts.filter(contact => contact.name.toLowerCase().includes(searchtextvalue.toLowerCase()))
        setSearchResult(results)
    }


    return (
        <div className="searchBox nav justify-content-center">
            <input className="nav-item"
                type="text"
                placeholder="Search"
                onChange={(e)=> filteredContacts(e.target.value)}
            />
            <SearchList contacts={searchResult}/>
        </div>
    )
}

export default SearchBar