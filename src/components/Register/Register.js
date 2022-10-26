import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
const Register = () => {
  const { createUser, displayName } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageUrl = form.image.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        user.photoURL = imageUrl;

        displayName(name)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        user.displayName = name;
        setSuccess(true);
        // picture = imageUrl;
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-50 mx-auto">
      {success ? (
        <h4 className="text-success">Registration successful</h4>
      ) : (
        <h2 className="text-center">Please Register</h2>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            type="text"
            name="image"
            placeholder="Enter name"
            required
          />
        </Form.Group>

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
          Register
        </Button>
        <p className="small fw-bold mt-2 pt-1 mb-0">
          Already have an account?
          <Link to="/login" className="link-success">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
