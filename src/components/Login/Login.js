import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
const Login = () => {
  const [error, setError] = useState("");
  const { googleSignIn, signInUser, githubSignIn, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(result.user);
        setUser(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error.message));
  };
  const handleGoogleSignIn = () => {
    googleSignIn();
    navigate(from, { replace: true });
  };
  const handleGithubSignIn = () => {
    githubSignIn();
    navigate(from, { replace: true });
  };
  return (
    <div className="w-50 mx-auto">
      <div>
        <p className="lead fw-bold fs- mb-0 me-3">Sign in with</p>
        <button
          type="button"
          className="btn btn-light btn-floating mx-1"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle></FaGoogle>
        </button>

        <button
          type="button"
          className="btn btn-light btn-floating mx-1"
          onClick={handleGithubSignIn}
        >
          <FaGithub></FaGithub>
        </button>
      </div>

      <div className="divider d-flex align-items-center my-4">
        <p className="text-center fw-bold mx-3 mb-0">Or</p>
      </div>
      <section className="">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <p className="small fw-bold mt-2 pt-1 mb-0">
            Don't have an account?
            <Link to="/register" className="link-success">
              Register
            </Link>
          </p>
        </Form>

        {/* 
        
        
        
       
              
              */}
      </section>
    </div>
  );
};

export default Login;
