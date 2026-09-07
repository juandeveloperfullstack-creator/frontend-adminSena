import React from 'react';

function App(){
  return(
    <div>
      {/* NABVAR SENA */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#39a900' }}>
        <div className= 'container'>
          <a className="navbar-brand text-white fw-bold d-flex align-items-center" href="#!">
            <i className="bi bi-gear-fill me-2"></i> AdminSena (React)
          </a>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className='container my-5'>
        <div className="p-4 bg-light rounded-3 shadow-sm border">
          <h2 className="fw-bold text-success">¡Frontend conectado y listo!</h2>
          <p className="text-muted mb-0">
            El siguiente paso será habilitar las rutas API en Laravel para consumir la primera tabla.
          </p>
        </div>
      </main>
    </div>
  )
}
export default App;