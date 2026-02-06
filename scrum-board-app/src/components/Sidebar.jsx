import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();
  const { t } = useI18n();

  const menu = [
    { name: t("sidebar.dashboard"), path: "/dashboard" },
    { name: t("sidebar.tasks"), path: "/board" },
    { name: t("sidebar.calendar"), path: "/calendar" },
    { name: t("sidebar.reports"), path: "/reports" },
    { name: t("sidebar.settings"), path: "/settings" },
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
        <h1 className="text-xl font-bold mb-6">TaskFlow</h1>

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
    </>
  );
}
