import React, { useState } from "react";
import Repo from "../Repo";
import InfiniteScroll from "react-infinite-scroll-component";
// Hooks
import useReposFetch from "../../hooks/useReposFetch";

//Styles
import { Wrapper, Content } from "./Github.styles";
import { Spinner } from "../Spinner/Spinner.styles";

const Github = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { repos, hasMore, loading, error } = useReposFetch(pageNumber);

  const dateDifference = (dateString1) => {
    let date2 = new Date("2021-09-13");
    let difference = new Date(dateString1).getTime() - date2.getTime();
    let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    return daysDifference;
  };

  return (
    <Wrapper>
      <h1 className="text-xl font-bold">Trending Repos</h1>
      <Content>
        {loading && <Spinner />}
        {error && "An Error Occurred"}
        <InfiniteScroll
          dataLength={repos.length} //This is important field to render the next data
          next={() => setPageNumber(pageNumber + 1)}
          hasMore={hasMore}
          loader={<Spinner />}
        >
          {repos.map((repo, index) => (
            <Repo
              key={index}
              repoName={repo.name}
              repoDesc={repo.description ? repo.description : "No Description"}
              repoOwnerAvatar={repo.owner.avatar_url}
              repoNbStars={repo.stargazers_count}
              repoNbissues={repo.open_issues_count}
              repoInterval={dateDifference(repo.pushed_at)}
              repoOwnerName={repo.owner.login}
            />
          ))}
        </InfiniteScroll>
      </Content>
    </Wrapper>
  );
};

export default Github;
