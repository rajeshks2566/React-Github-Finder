import React, { useState, useEffect } from "react";
import MainContent from "./MainContent";
import Search from "./Search";
import Axios from "../apis/Axios";

const Home = () => {
  let [term, setTerm] = useState("");
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let client_id = "Iv1.8f559d6fee984f86";
        let client_secret = "1894836622d1d00cd061a9c849b057023e800595";
        let users = await Axios.get(
          `/users/rajeshks2566?Client_id${client_id}&Client_secret${client_secret}`
        );

        let ReposData = await Axios.get(
          `/users/rajeshks2566/repos?Client_id${client_id}&Client_secret${client_secret}`
        );
        setLoading(true);
        setTerm(users.data);
        setRepos(ReposData.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  let onTermSubmit = async term => {
    try {
      let client_id = "Iv1.8f559d6fee984f86";
      let client_secret = "1894836622d1d00cd061a9c849b057023e800595";

      let users = await Axios.get(
        `/users/${term}?Client_id${client_id}&Client_secret${client_secret}`
      );

      let ReposData = await Axios.get(
        `/users/${term}/repos?Client_id${client_id}&Client_secret${client_secret}`
      );
      console.log(users);
      setLoading(true);
      setRepos(ReposData.data);
      setTerm(users.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <section id="mainSecBlock">
      <article>
        <Search onTermSubmit={onTermSubmit} users={term} loading={loading} />
        <MainContent users={term} loading={loading} repos={repos} />
      </article>
    </section>
  );
};

export default Home;
