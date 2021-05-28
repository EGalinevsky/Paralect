import * as axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "../pagination/pagination";
import { Repository } from "./RepositoryItem/Repository";

export const WorksContainer = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [repositories, setRepositories] = useState([]);
  const itemsPage = 4;
  const totalRepositoriesCount = props.data.public_repos;

  const URLRep = `https://api.github.com/users/${props.data.login}/repos?page=${currentPage}&per_page=${itemsPage}`;

  useEffect(() => {
    axios.get(URLRep).then((res) => setRepositories(res.data));
  }, [URLRep]);

  return (
    <div>
      <h1>Repositories ({totalRepositoriesCount})</h1>
      {repositories.map((rep) => (
        <Repository
          key={rep.id}
          href={rep.html_url}
          name={rep.name}
          title={rep.description}
        />
      ))}
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalRepositoriesCount={totalRepositoriesCount}
        itemsPage={itemsPage}
      />
    </div>
  );
};
