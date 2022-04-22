import React from "react";

const Repo = ({
  id,
  name,
  owner,
  html_url,
  description,
  created_at,
  clone_url,
  default_branch,
}) => {
  return (
    <section>
      <article>
        <div>
          <h5>{name}</h5>
          <div className="owner_block">
            <img src={owner.avatar_url} alt={owner.login} />
          </div>
          <div className="description">
            <h4>{description}</h4>
          </div>
          <div className="footer">
            <a href={clone_url} target="_blank">
              Clone Repo
            </a>
            <a href={html_url} target="_blank">
              View Repo
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Repo;
