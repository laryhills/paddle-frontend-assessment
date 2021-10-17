import { useState, useEffect } from "react";
import axios from "axios";
import { dateDifference } from "../utilities";

// API
const API =
  "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc";

export default function useReposFetch(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    try {
      axios({
        method: "GET",
        url: API,
        params: {
          page: pageNumber,
          per_page: 100,
        },
      }).then((response) => {
        setRepos((prevRepos) => {
          return [
            ...prevRepos,
            ...response.data.items.filter(
              (item) => dateDifference(item.pushed_at) === 30
            ),
          ];
        });

        setHasMore(response.data.items.length > 0);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }, [pageNumber]);
  return { loading, error, repos, hasMore };
}
