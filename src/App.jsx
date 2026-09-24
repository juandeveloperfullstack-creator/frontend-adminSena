import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from './layouts/AdminLayout';
import { Home } from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* se hace el enrutamiento dentro del layout de administrador */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<Home />} />
                </Route>
                {/* se redirige al inicio si se se entra a la raiz "/" */}
                <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;