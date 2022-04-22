import React, { Fragment, useEffect, useState } from "react";

const AjaxApiFetch = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    let xhr = new XMLHttpRequest();
    // assign api end points
    xhr.open("GET", "https://api.github.com/users");
    xhr.onload = () => {
      let users = JSON.parse(xhr.response);
      setState(users);
    };
    xhr.send();
  }, []);
  console.log(state);
  return (
    <>
      {state.length === 0
        ? "Loading"
        : state.map(user => {
            return (
              <Fragment key={user.id}>
                <img src={user.avatar_url} alt="" />
                <li>{user.login}</li>
              </Fragment>
            );
          })}
    </>
  );
};

export default AjaxApiFetch;
