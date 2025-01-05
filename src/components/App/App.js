import './App.scss';

import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

import Header from './Header';

import HomePage from '../Home/Home';
import ContactUs from '../ContactUs/ContactUs';
import PrivacyPolicy from '../Standard/PrivacyPolicy';
import Terms from '../Standard/Terms';
import BaddyBuddyPrivacyPolicy from '../BaddyBuddy/PrivacyPolicy';
import BaddyBuddyTerms from '../BaddyBuddy/Terms';
import OutfitsPrivacyPolicy from '../Outfits/PrivacyPolicy';
import OutfitsTerms from '../Outfits/Terms';

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
    element: <BaddyBuddyPrivacyPolicy />,
  },
  {
    path: ROUTES.BADDYBUDDY_TERMS,
    element: <BaddyBuddyTerms />,
  },
  {
    path: ROUTES.OUTFITS_PRIVACY_POLICY,
    element: <OutfitsPrivacyPolicy />,
  },
  {
    path: ROUTES.OUTFITS_TERMS,
    element: <OutfitsTerms />,
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