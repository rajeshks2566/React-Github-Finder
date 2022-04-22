import React, { useEffect, useState } from "react";

const WindowFetchApi = () => {
  let [state, setState] = useState([]);

  useEffect(() => {
    window
      .fetch("https://api.github.com/users", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
      .then(data => {
        data.json().then(value => {
          setState(value);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(state);
  return (
    <div>
      {state.map(x => {
        return (
          <>
            <table>
              <tr>
                <th>Name</th>
                <th>Images</th>
                <th>Followers</th>
              </tr>
              <tr>
                <td>{x.login}</td>
                <td>
                  <img
                    src={x.avatar_url}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                    }}
                  />
                </td>
                <td>{x.followers_url}</td>
              </tr>
            </table>
          </>
        );
      })}
    </div>
  );
};

export default WindowFetchApi;
