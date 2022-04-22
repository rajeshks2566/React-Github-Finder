import React, { Fragment } from "react";
import Repo from "./Repo";
import Spinner from "./Spinner";

const MainContent = props => {
  return (
    <div className="mainBlock">
      <main className="repo_block">
        {props.loading === true ? (
          <Spinner />
        ) : (
          props.repos.map(rep => {
            return (
              <Fragment>
                <Repo {...rep} />
              </Fragment>
            );
          })
        )}
      </main>
    </div>
  );
};

export default MainContent;
