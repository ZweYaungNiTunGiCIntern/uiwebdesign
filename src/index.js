import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';import Service from './ServiceSection.js'
import ServiceSecond from './ServiceSection2.js'
import PriceSection from './PriceSection.js'
import AdvantageSection from './AdvantageSection.js'
import ServiceSection from './ServiceSection.js'
import About from './About.js'
import OurNews from './OurNewsSection.js'
import GetInTouch from './GetInTouchSection.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import FeedBack from './FeedBack.js'

import ImageTextSection from './ImageTextSection.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Header /><ImageTextSection /><Footer /></div>,
  },
  {
    path: "/home",
    element: <div><Header /><ImageTextSection /><Home /><Footer /></div> ,
  },
  {
    path: "/touch",
    element: <div><Header /><GetInTouch /><Footer /></div> ,
  },
  {
    path: "/service",
    element: <div><Header /><ServiceSection /><ServiceSecond /><Footer /></div> ,
  },
  {
    path: "/advantage",
    element: <div><Header /><AdvantageSection /><Footer /></div> ,
  },
  {
    path: "/about",
    element: <div><Header /><About /><Footer /></div> ,
  },{
    path: "/price",
    element: <div><Header /><PriceSection /><Footer /></div> ,
  },
  {
    path: "/feedback",
    element: <div><Header /><OurNews /><FeedBack /><Footer /></div> ,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    
    <RouterProvider router={router} />
    
  </div>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vita
