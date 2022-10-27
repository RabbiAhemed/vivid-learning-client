import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Courses from "./components/Courses/Courses";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import CheckOut from "./components/checkOut/checkOut";
import PrivateRoute from "./PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
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
          element: <Courses></Courses>,
          loader: async ({ params }) => {
            return fetch(
              "https://server-side-vivid-learning-bing6n4j9-rabbiahemed.vercel.app/allCourses"
            );
          },
        },
        {
          path: "/course/:id",
          element: <CourseDetail></CourseDetail>,
          loader: async ({ params }) => {
            return fetch(
              `https://server-side-vivid-learning-bing6n4j9-rabbiahemed.vercel.app/course/${params.id}`
            );
          },
        },
        {
          path: "/checkout/:id",
          element: (
            <PrivateRoute>
              <CheckOut></CheckOut>
            </PrivateRoute>
          ),
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
