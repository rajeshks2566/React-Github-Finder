import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const AxAysncAwait = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then(res => {
        let payload = res.data;
        setState(payload);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(state);
  return (
    <div>
      <>
        {state.map(x => {
          return (
            <Fragment>
              <h1>{x.login}</h1>
              <img src={x.avatar_url} alt="" />
            </Fragment>
          );
        })}
      </>
    </div>
  );
};

export default AxAysncAwait;
