import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const AsyncAwait = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    let fetchdata = async () => {
      try {
        let users = await axios.get("https://api.github.com/users");
        setState(users.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  console.log(state);
  return (
    <div>
      {state.map(x => {
        return (
          <Fragment>
            <h1>{x.login}</h1>
          </Fragment>
        );
      })}
    </div>
  );
};

export default AsyncAwait;
