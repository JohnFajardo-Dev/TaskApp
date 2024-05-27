import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <section className="Home">
      <section className="home-cont">
        <h1>Hello!</h1>
        <article className="home-btns">
          <button className="login-btn">
            <Link to="/login">Login</Link>
          </button>
          <button className="register-btn">
            <Link to="/register">Register</Link>
          </button>
        </article>
      </section>
    </section>
  );
}

export default Home;
