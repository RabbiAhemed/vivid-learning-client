import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <div className="m-2">
        <div>
          <h2>what is `cors`?</h2>
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>
        <div>
          <h2>
            Why are you using `firebase`? What other options do you have to
            implement authentication?
          </h2>
          <p>
            Google's Firebase can be used for the following: In the database,
            Firebase maintains all data in real time. As a result, data transfer
            to and from the database is simple and speedy. Amazon Web Service
            (AWS) is an alternative for firebase.
          </p>
        </div>
        <div>
          <h2>How does the private route work?</h2>
          <p>
            The private route redirects URL and authenticate condition. If the
            user is not authenticated he will be redirected to the login page
            and the user can only access the authenticated routes If he is
            authenticated (Logged in)
          </p>
        </div>
        <div>
          <h2>What is Node? How does Node work?</h2>
          <p>
            Node allows developers to write JavaScript code that runs directly
            in a computer process itself instead of in a browser. Node can,
            therefore, be used to write server-side applications with access to
            the operating system, file system, and everything else required to
            build fully-functional applications. Node.js is written in C, C++,
            and JavaScript, and it is built on the open-source V8 JavaScript
            engine which also powers JS in browsers such as Google Chrome. As V8
            supports new features in JavaScript, they are incorporated into
            Node.
          </p>
        </div>
        <div>
          <h2></h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
