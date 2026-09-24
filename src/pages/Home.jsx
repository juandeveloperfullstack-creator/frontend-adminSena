export const Home = () => {
  return (
    <div className="space-y-6">
      {/* Banner central similar al Slider */}
      <div className="bg-[#e2ede0] rounded-xl p-8 flex flex-col items-center text-center shadow-inner relative overflow-hidden">
        <div className="max-w-2xl space-y-4 py-6">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            SENA DIGITAL
          </h1>
          <p className="text-gray-700 text-base">
            Cursos cortos virtuales para aprender sobre tecnología
          </p>
          
          <div className="bg-gray-800/80 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto space-y-2 mt-4">
            <h3 className="text-lg font-bold">Formación Técnica y Tecnológica</h3>
            <p className="text-xs text-gray-300">Descubre los programas de formación disponibles para potenciar tu perfil profesional.</p>
            <button className="bg-[#39A900] hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm font-semibold transition mt-2">
              ¡Inscríbete!
            </button>
          </div>
        </div>
      </div>

      {/* Bloques de Información Lado a Lado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#39A900]">
          <h3 className="text-lg font-bold text-[#39A900] mb-2 uppercase">
            Quiénes Somos
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ofrecemos formación gratuita a millones de colombianos que se benefician con programas técnicos, tecnológicos y complementarios enfocados en el desarrollo económico, científico y social del país.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#39A900]">
          <h3 className="text-lg font-bold text-[#39A900] mb-2 uppercase">
            Nuestra Visión
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ser una entidad referente en formación profesional integral, consolidada como motor de innovación, empleabilidad y transformación social, adaptada a las exigencias globales y tecnológicas del mercado laboral.
          </p>
        </div>
      </div>
    </div>
  );
};