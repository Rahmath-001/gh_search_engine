import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import "./UserDetails.css";

function UserDetails({loading}) {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [repos, setRepos] = useState([]);
  const [visibleRepos, setVisibleRepos] = useState(5);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`);
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
        setUserDetails(userResponse.data);
        setRepos(reposResponse.data);
        
      } catch (error) {
        console.error("Error fetching user data:", error);
        
      }
    };

    fetchUserData();
  }, [username]);

  const handleLoadMore = () => {
    setVisibleRepos((prev) => prev + 5); // Show 5 more repos on each click
  };


  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!userDetails) {
    return <div className="error">User not found.</div>;
  }

  return (
<>
<center>
{loading && <Loading />}
</center>
<div className="user-details-container">
      <div className="user-card">
        <img src={userDetails.avatar_url} alt={`${userDetails.login} Avatar`} className="avatar" />
        <h2>{userDetails.name || userDetails.login}</h2>
        <p>{userDetails.bio || "No bio available."}</p>
        <div className="details">
          <p>Followers: {userDetails.followers}</p>
          <p>Following: {userDetails.following}</p>
          <p>Public Repos: {userDetails.public_repos}</p>
        </div>
        <a href={userDetails.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
          View GitHub Profile
        </a>
      </div>

      <div className="repos-section">
        <h3>Public Repositories</h3>
        {repos.length === 0 ? (
          <p>No repositories available.</p>
        ) : (
          <>
            <div className="repos-grid">
              {repos.slice(0, visibleRepos).map((repo) => (
                <div key={repo.id} className="repo-card">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <h4>{repo.name}</h4>
                  </a>
                  <p>{repo.description || "No description available."}</p>
                </div>
              ))}
            </div>
            {visibleRepos < repos.length && (
              <button onClick={handleLoadMore} className="load-more-button">
                Load More
              </button>
            )}
          </>
        )}
      </div>

      <Link to="/" className="back-button">Back to Home</Link>
    </div>
    </>
  );
}

export default UserDetails;
