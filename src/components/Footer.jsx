/* import React from "react"; */

export const Footer = () => {
    return (
        <footer className="bg-[#39A900] text-white pt-8 pb-4 px-12 border-t-2 border-white/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div>
                    <h4 className="font-bold mb-2">Contacto</h4>
                    <p className="text-white/90">
                    Dirección: Calle 57 No. 8 - 69 Bogotá D.C. (Cundinamarca), Colombia
                    </p>
                    <p className="text-white/90">Teléfono conmutador: +57 601 736 6060</p>
                    <p className="text-white/90">
                    Correo institucional: servicioalciudadano@sena.edu.co
                    </p>
                </div>
                    <div>
                        <h4 className="font-bold mb-2">Síguenos</h4>
                            <div className="flex gap-3 text-lg">
                                <span></span> <span></span> <span></span> <span></span>
                        </div>
                    </div>
                </div>
            <div className="border-t border-white/30 mt-6 pt-4 text-center text-xs text-white/80">
            © 2026 AdminSena
        </div>
    </footer>
    );
};
