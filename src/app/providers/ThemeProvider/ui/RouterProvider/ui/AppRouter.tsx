import { AboutPage } from 'pages/AboutPage';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => (
    <Suspense fallback={<div>Loading chunk...</div>}>
        <Routes>
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    </Suspense>
);

export default AppRouter;
