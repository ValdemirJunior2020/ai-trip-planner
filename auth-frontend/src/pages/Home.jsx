import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to the Auth System</h1>
      {user ? (
        <h2>Hi, {user.name}!</h2>
      ) : (
        <>
          <p>Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Login</Link></p>
        </>
      )}
    </div>
  );
};

export default Home;
