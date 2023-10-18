import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import "flowbite";
import "flowbite-react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";
import AuthProviders from "./Providers/AuthProviders";

// import  AnimatedCursor from 'react-animated-cursor'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AnimatedCursor
      innerSize={10}
      color='50, 205, 50	'
      outerSize={45}
      outerScale={1.2}
      trailingSpeed={30}
    /> */}
    <ThemeProvider>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </ThemeProvider>
  </React.StrictMode>
);
