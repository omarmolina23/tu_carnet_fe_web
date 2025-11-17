import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // íconos

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-5 py-2 border-b border-ufps-texto-principal bg-[#faf7f7]">
      <div className="flex items-center justify-between">

        {/* IZQUIERDA */}
        <div className="flex items-center gap-2">
          <img src="/ufps_logo.svg" alt="Logo UFPS" className="h-10" />
          <h1 className="text-xl font-semibold">
            TuCarnet{" "}
            <span className="text-ufps-color-principal font-bold italic">
              UFPS
            </span>
          </h1>
        </div>

        {/* BOTÓN HAMBURGUESA (solo móvil) */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex items-center gap-6">
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
        </nav>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="mt-3 flex flex-col gap-3 md:hidden">
          <Link
            to="/validar"
            onClick={() => setOpen(false)}
            className="text-ufps-texto-oscuro hover:text-ufps-color-principal font-medium transition py-1"
          >
            Inicio
          </Link>

          <Link
            to="/ayuda"
            onClick={() => setOpen(false)}
            className="text-ufps-texto-oscuro hover:text-ufps-color-principal font-medium transition py-1"
          >
            Administrador
          </Link>
        </div>
      )}
    </header>
  );
}
