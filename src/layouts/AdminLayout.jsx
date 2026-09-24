/* import React from "react"; */
import { Outlet } from "react-router-dom";
import { NavbarAdmin } from "../components/NavbarAdmin";
import { Footer } from "../components/Footer";

export const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
            <NavbarAdmin />

            <main className="flex-1 max-w-7xl w-full mx-auto p-6">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}