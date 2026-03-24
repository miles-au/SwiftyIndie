import './App.scss';

import React from 'react';
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

import Header from './Header';

import HomePage from '../Home/Home';
import ContactUs from '../ContactUs/ContactUs';
import PrivacyPolicy from '../Standard/PrivacyPolicy';
import Terms from '../Standard/Terms';

const router = createHashRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.CONTACT_US,
    element: <ContactUs />,
  },
  {
    path: ROUTES.STANDARD_PRIVACY_POLICY,
    element: <PrivacyPolicy />,
  },
  {
    path: ROUTES.STANDARD_TERMS,
    element: <Terms />,
  },
  {
    path: ROUTES.BADDYBUDDY_PRIVACY_POLICY,
    element: <Navigate to={`/${ROUTES.STANDARD_PRIVACY_POLICY}`} replace />,
  },
  {
    path: ROUTES.BADDYBUDDY_TERMS,
    element: <Navigate to={`/${ROUTES.STANDARD_TERMS}`} replace />,
  },
  {
    path: ROUTES.OUTFITS_PRIVACY_POLICY,
    element: <Navigate to={`/${ROUTES.STANDARD_PRIVACY_POLICY}`} replace />,
  },
  {
    path: ROUTES.OUTFITS_TERMS,
    element: <Navigate to={`/${ROUTES.STANDARD_TERMS}`} replace />,
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
