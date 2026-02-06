import ThemeToggle from "./ThemeToggle";
import { useI18n } from "../i18n/I18nContext";

export default function Topbar({ onMenuClick, darkMode, setDarkMode }) {
  const { t } = useI18n();

  return (
    <header className="flex items-center gap-3 p-4 bg-zinc-950 border-b border-zinc-800">
      <button className="sm:hidden text-xl" onClick={onMenuClick}>
        ☰
      </button>

      <input
        type="text"
        placeholder={t("topbar.search")}
        className="flex-1 bg-zinc-800 text-white rounded px-4 py-2 focus:outline-none"
      />

      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="w-8 h-8 rounded-full bg-zinc-600" />
    </header>
  );
}
