import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Root from './routes/root';
import ErrorPage from './error-page';
import LoginPage from './routes/login/LoginPage';

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>cargando</div>}>
                <Routes>
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/user" element={<Root />}>
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
