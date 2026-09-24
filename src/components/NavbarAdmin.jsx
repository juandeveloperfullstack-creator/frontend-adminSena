import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSena from '../assets/logo-sena.png';

export const NavbarAdmin = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
    <nav className="bg-[#39A900] text-white px-6 py-3 shadow-md flex items-center justify-between">
      {/* Logo SENA + Texto AdminSena */}
        <div className="flex items-center gap-2">
            <img 
            src={logoSena} 
            alt="Logo SENA" 
            className="h-9 w-auto object-contain" 
            />
            <span className="text-2xl font-bold tracking-tight">AdminSena</span>
            </div>

      {/* Botones del Menú */}
        <div className="flex items-center gap-3">
        <Link 
        to="/admin/dashboard" 
        className="bg-white text-[#39A900] font-medium px-4 py-1.5 rounded-md hover:bg-gray-100 transition shadow-sm text-sm"
        >
        Inicio
        </Link>

        {/* Dropdown Gestión Administrativa */}
        <div className="relative">
        <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-[#2e8800] hover:bg-[#267200] text-white font-medium px-4 py-1.5 rounded-md flex items-center gap-2 transition text-sm"
        >
            <span>Gestión Administrativa</span>
            <span className="text-xs">▼</span>
        </button>

        {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 text-gray-700 border border-gray-100">
                <Link to="/admin/areas" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                    <span></span> Áreas
                </Link>
                <Link to="/admin/centros" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                    <span></span> Centros de Formación
                </Link>
                <Link to="/admin/computadores" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                    <span></span> Computadores
                </Link>
                <Link to="/admin/profesores" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                    <span></span> Profesores
                </Link>
                <Link to="/admin/cursos" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                    <span></span> Cursos
                </Link>
                <Link to="/admin/aprendices" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                    <span></span> Aprendices
                </Link>
            </div>
            )}
        </div>

        <Link 
        to="/login" 
        className="bg-white text-[#39A900] font-medium px-4 py-1.5 rounded-md hover:bg-gray-100 transition shadow-sm text-sm flex items-center gap-1"
        >
        <span></span> Iniciar Sesión
        </Link>
        </div>

      {/* Buscador */}
        <div className="flex items-center gap-2">
        <input 
        type="text" 
        placeholder="Buscar..." 
        className="px-3 py-1.5 rounded-md text-gray-800 text-sm outline-none bg-white w-48 border border-transparent focus:border-green-300" 
        />
            <button className="bg-[#2e8800] hover:bg-[#267200] text-white font-medium px-4 py-1.5 rounded-md text-sm transition">
            Buscar
            </button>
        </div>
    </nav>
    );
};