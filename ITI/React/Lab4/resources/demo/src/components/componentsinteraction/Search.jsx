import {useState} from 'react';

const Search = ({handleSearch}) => {
    const [word, setWord] = useState("");
    const handleChange=(e)=>{
setWord(e.target.value)
handleSearch(e.target.value)
    }
    return (
        <div>
           <input type="text" name="search" value={word} onChange={handleChange}></input>
        </div>
    );
};

export default Search;