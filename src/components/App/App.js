import './App.scss';

import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

import Header from './Header';

import HomePage from '../Home/Home';
import ContactUs from '../ContactUs/ContactUs';
import BaddyBuddyPrivacyPolicy from '../BaddyBuddy/PrivacyPolicy';
import BaddyBuddyTerms from '../BaddyBuddy/Terms';

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
    path: ROUTES.BADDYBUDDY_PRIVACY_POLICY,
    element: <BaddyBuddyPrivacyPolicy />,
  },
  {
    path: ROUTES.BADDYBUDDY_TERMS,
    element: <BaddyBuddyTerms />,
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