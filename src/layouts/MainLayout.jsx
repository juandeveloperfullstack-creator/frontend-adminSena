/* import React from "react"; */
import { Outlet } from "react-router-dom";
import { Navbar } from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Componente global navbar */}
            <Navbar />
            {/* area para los componentes no globales */}
            <main className="flex-1 container mx-auto p-4">
                <Outlet />
            </main>

            <footer className="bg-gray-800 text-white text-center py-4 mt-8">
                <p>&copy; 2026 AdminSena - Todos los derechos reservados</p>
            </footer>
        </div>
    );
};