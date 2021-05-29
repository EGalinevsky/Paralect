import * as axios from "axios";
import React, { useEffect, useState } from "react";
import s from "./Works.module.css";
import { Pagination } from "../../../pagination/pagination";
import { Repository } from "./RepositoryItem/Repository";

export const WorksContainer = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const itemsPage = 4;
  const totalRepositoriesCount = props.data.public_repos;

  const URLRep = `https://api.github.com/users/${props.data.login}/repos?page=${currentPage}&per_page=${itemsPage}`;

  useEffect(() => {
    async function getRep() {
      try {
        setLoading(true);
        await axios.get(URLRep).then((res) => setRepositories(res.data));
      } finally {
        setLoading(false);
      }
    }
    getRep();
  }, [URLRep]);

  return (
    <div className={s.main__works}>
      <h1>Repositories ({totalRepositoriesCount})</h1>
      <div className={s.works__wrapper}>
        {repositories.map((rep) => (
          <Repository
            key={rep.id}
            href={rep.html_url}
            name={rep.name}
            title={rep.description}
          />
        ))}
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        login={props.data.login}
        totalRepositoriesCount={totalRepositoriesCount}
        itemsPage={itemsPage}
      />
      {loading && <div className={s.loader}></div>}
    </div>
  );
};
