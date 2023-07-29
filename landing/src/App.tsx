import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Root from './routes/root';
import EvaluacionMensual from './routes/inspeccion/mensual/EvaluacionMensual';
import Eventos from './routes/eventos/Eventos';
import Informacion from './routes/información/Informacion';
import ErrorPage from './error-page';
import LoginPage from './routes/login/LoginPage';
import CargaInicial from './routes/configuracion/cargaInicial/CargaInicial';
import Revision from "./routes/configuracion/revision/CargaInicial";
import Correccion from './routes/configuracion/cargaInicial/Correccion';

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>cargando</div>}>
                <Routes>
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/user" element={<Root />}>
                        <Route path="*" element={<ErrorPage />} />
                        <Route path="inspeccion">
                            <Route
                                path="mensual"
                                element={<EvaluacionMensual />}
                            />
                        </Route>
                        <Route path="eventos" element={<Eventos />} />
                        <Route path="informacion" element={<Informacion />} />
                        <Route
                            path="configuracion"
                            element={<CargaInicial />}
                        />
                        <Route
                            path="revision"
                            element={<Revision />}
                        />
                        <Route
                            path="correccion"
                            element={<Correccion />}
                        />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
