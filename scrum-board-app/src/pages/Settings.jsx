import { useI18n } from "../i18n/I18nContext";

export default function Settings() {
  const { t, language, changeLanguage } = useI18n();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {t("settings.title")}
      </h1>

      <div className="bg-neutral-900 p-4 rounded-xl space-y-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          {t("settings.notifications")}
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          {t("settings.darkMode")}
        </label>

        <div className="flex flex-col gap-2">
          <span className="text-sm">
            {t("settings.language")}
          </span>

          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-zinc-800 text-white rounded p-2"
          >
            <option value="pt">🇧🇷 Português</option>
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Español</option>
          </select>
        </div>
      </div>
    </div>
  );
}
