import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const ProfileLinks = lazy(() => import('./pages/profile/ProfileLinks/ProfileLinks'));
const ProfileDetails = lazy(() => import('./pages/profile/ProfileDetails/ProfileDetails'));

function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<span>...Loading</span>}>
            <Routes>
                <Route path="/*" element={<ProfileLinks />} />
                <Route path="/profile/details" element={<ProfileDetails />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
