import app_logo from "../assets/app_logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-2 border-b-2 border-red-600 bg-[#faf7f7]">
      <div className="flex items-center gap-2">
        <img src={app_logo} alt="Logo UFPS" className="h-10" />
        <h1 className="text-xl font-semibold">
          TuCarnet <span className="text-ufps-red font-bold italic">UFPS</span>
        </h1>
      </div>
    </header>
  );
}
