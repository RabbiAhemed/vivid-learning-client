import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/CoursesHome/CoursesHome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Courses from "./components/Courses/Courses";
import Course from "./components/Course/Course";
import CoursesHome from "./components/CoursesHome/CoursesHome";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/courses",
          element: <CoursesHome></CoursesHome>,
          children: [
            {
              path: "/courses",
              element: <Courses></Courses>,
              loader: async ({ params }) => {
                return fetch(
                  "https://server-side-vivid-learning-bing6n4j9-rabbiahemed.vercel.app/allCourses"
                );
              },
            },
          ],
        },
        {
          path: "/course/:courseId",
          element: <Course></Course>,
          loader: async ({ params }) => {
            return fetch(
              `https://server-side-vivid-learning-bing6n4j9-rabbiahemed.vercel.app/course/${params.courseId}`
            );
          },
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
