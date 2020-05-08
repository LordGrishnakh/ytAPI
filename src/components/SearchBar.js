import React, { useState } from "react";

const SearchBar = (props) => {
  const [ userInput, setUserInput ] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    //callback from app.js
    props.onFormSubmit(userInput);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="video">Video Search</label>
          <input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
        </div>
      </form>
      <p>{userInput}</p>
    </div>
  );
};

export default SearchBar;
