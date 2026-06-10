export default function Footer() {
    return(
        <footer className="bg-ufps-color-principal border-t border-ufps-error-principal text-ufps-blanco-favorito text-center py-3 mt-auto">
        <p>
          TuCarnet <span className="font-bold">UFPS</span>
        </p>
        <p className="text-sm">© {new Date().getFullYear()}. Todos los derechos reservados</p>
      </footer>
    );
}