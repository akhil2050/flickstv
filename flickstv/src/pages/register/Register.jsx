import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [regErr, setRegErr] = useState("");
  const userhistory = useHistory();

  const emailRef = useRef();
  // const pwdRef = useRef();
  // const unameRef = useRef();

  const startHandle = () => {
    setEmail(emailRef.current.value);
  };
  const finishHandle = async (e) => {

    e.preventDefault();
    try {
      if(username && password){
        await axios.post("auth/register", { email, password, username});
      userhistory.push("/login");

      }
    } catch (err) {
      console.log(err);
      setRegErr(err.response) ;
    }
    
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="assets/logo.png"
            alt=""
          />

        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {email ? (
          <form className="input">
            {/* <input type="username" placeholder="username" ref={unameRef} />
            <input type="password" placeholder="password" ref={pwdRef} /> */}
             <input type="username" placeholder="username" 
            onChange={(e) => setUsername(e.target.value)} />
             <input type="password" placeholder="password" 
            onChange={(e) => setPassword(e.target.value)} />
            if (username){
              <button className="registerButton" onClick={finishHandle}>
                Start
            </button>
            }
            
              
          </form>
        ) : (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={startHandle}>
              Get Started
            </button>
          </div>
        )}
        <p  className={ regErr ? "errmsg" : "offscreen"} aria-live="assertive">User registration Failed</p>
        <div className="regLogin">
          <span>
            Already have an account?
            <Link to="/login"><button>Sign In</button></Link>
          </span>
        </div>

      </div>
    </div>
  );
}
