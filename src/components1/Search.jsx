import React, { useState } from "react";
import { FaSearch, FaSuitcase, FaBuilding } from "react-icons/fa";

const Search = props => {
  let [state, setState] = useState("");

  let handlesubmit = e => {
    e.preventDefault();
    props.onTermSubmit(state);
  };
  return (
    <div className="searchBlock">
      <form onSubmit={handlesubmit}>
        <span>
          <input
            type="text"
            placeholder="search profile"
            value={state}
            onChange={e => {
              setState(e.target.value);
            }}
          />
        </span>
        <span>
          <FaSearch />
        </span>
      </form>
      <main>
        <header>
          <figure>
            <img src={props.users.avatar_url} />
          </figure>
          <h2>{props.users.login}</h2>
          <p>
            <span>
              <FaSuitcase />
            </span>
            {props.users.bio}
          </p>

          <p>
            <span>
              <FaBuilding />
            </span>
            {props.users.company}
          </p>
          <button className="btn">Edit Profile</button>
        </header>
      </main>
    </div>
  );
};

export default Search;
