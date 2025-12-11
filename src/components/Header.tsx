
export default function Header() {

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
      </div>
    </header>
  );
}
