import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared/config/routerConfig/routerConfig';

const AppRouter = () => (
    <Suspense fallback={<div>Loading chunk...</div>}>
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<div className="page-wrapper">{route.element}</div>}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
