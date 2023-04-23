import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./error-page";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main';
import Homes from './Components/Homes/Homes';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/JobDetails/JobDetails';
import CustomCartLoader from './Components/CustomCartLoader';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Homes></Homes>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: CustomCartLoader
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
