import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-2 border-b border-ufps-texto-principal bg-[#faf7f7]">
      
      {/* IZQUIERDA */}
      <div className="flex items-center gap-2">
        <img src="/ufps_logo.svg" alt="Logo UFPS" className="h-10" />
        <h1 className="text-xl font-semibold">
          TuCarnet <span className="text-ufps-color-principal font-bold italic">UFPS</span>
        </h1>
      </div>

      {/* DERECHA (dos secciones navegables) */}
      <div className="flex items-center gap-6">
        <Link 
          to="/validar"
          className="text-ufps-texto-oscuro hover:text-ufps-color-principal font-medium transition"
        >
          Inicio
        </Link>

        <Link 
          to="/ayuda"
          className="text-ufps-texto-oscuro hover:text-ufps-color-principal font-medium transition"
        >
          Administrador
        </Link>
      </div>

    </header>
  );
}

