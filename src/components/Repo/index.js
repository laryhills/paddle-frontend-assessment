import React from "react";

function Repo({
  repoName,
  repoDesc,
  repoOwnerAvatar,
  repoNbStars,
  repoNbissues,
  repoInterval,
  repoOwnerName,
}) {
  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-6 max-w-2xl">
      <img
        className="border-2 border-gray-300 m-2"
        src={repoOwnerAvatar}
        alt=""
        width="150"
        height="150"
      />
      <div className="p-2 text-center md:text-left space-y-4">
        <figcaption className="font-medium">
          <blockquote>
            <p className="text-lg font-semibold">{repoName}</p>
          </blockquote>
          <div className="text-cyan-600">{repoDesc}</div>
          <div className="mt-5">
            <span className="text-gray-500 border-2 border-gray-300 p-2 mr-2">
              Stars :{" "}
              {repoNbStars > 1000
                ? `${(repoNbStars / 1000).toFixed(1)}k`
                : repoNbStars}
            </span>
            <span className="text-gray-500 border-2 border-gray-300 p-2 mr-2">
              Issues : {repoNbissues ? repoNbissues : "No Issues"}
            </span>
          </div>
          <div className="text-gray-400 mt-5">
            {repoInterval === 1
              ? `Submitted ${repoInterval} day ago by ${repoOwnerName}`
              : `Submitted ${repoInterval} days ago by ${repoOwnerName}`}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Repo;
