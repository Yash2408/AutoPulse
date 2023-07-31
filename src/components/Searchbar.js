import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        console.log("on tap is click");
        try {
            const response = await axios.get(`http://localhost:3001/api/usersSearch?query=${searchValue}`);
            const data = response.data;
            console.log(data);
            setSearchResults(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;