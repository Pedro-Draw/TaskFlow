import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tasks", path: "/board" },
    { name: "Calendar", path: "/calendar" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed sm:static z-50 bg-zinc-900 w-64 h-full p-4 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
      >
        <h1 className="text-xl font-bold mb-6">NÉ</h1>

        <nav className="space-y-2">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded hover:bg-zinc-800 ${
                location.pathname === item.path ? "bg-zinc-800" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Botão flutuante mobile  nao ativr pois ja tenho um que controla no lugar certo no arquivo topbar.jsx*/}
      {/* <button
        className="sm:hidden fixed bottom-5 left-5 z-50 bg-white text-black rounded-full w-14 h-14 text-2xl shadow-lg"
        onClick={() => setOpen(true)}
      >
        ☰
      </button> */}
    </>
  );
}
