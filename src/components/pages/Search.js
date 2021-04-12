import React from "react";

function Search(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Search For a Breed"
          id="search"
        />
        <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
