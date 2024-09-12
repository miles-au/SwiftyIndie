import './App.scss';

import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

import Header from './Header';

import HomePage from '../Home/Home';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Terms from '../Terms/Terms';
import ContactUs from '../ContactUs/ContactUs';

const router = createHashRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.PRIVACY_POLICY,
    element: <PrivacyPolicy />,
  },
  {
    path: ROUTES.TERMS,
    element: <Terms />,
  },
  {
    path: ROUTES.CONTACT_US,
    element: <ContactUs />,
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;