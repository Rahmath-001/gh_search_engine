import { Link } from "react-router-dom";
import Loading from "./Loading";
import Header from "./Header";


function Home({ users, loading, fetchUsers }) {
  return (
    <>

      <center>
      {loading && <Loading />}

      <Header fetchUsers={fetchUsers} />

        <div className="row">
          {users.map((user, i) => (
            <div className="side" key={i}>
              <img src={user.avatar_url} height={200} style={{borderRadius:'30px'}} alt="ProfilePic"></img>
              <h2>{user.login}</h2>
              <div className="profile-button">
                <div className="a">
                  <Link to={`/user/${user.login}`}>Check Profile</Link>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </center>
    </>
  );
}

export default Home;
