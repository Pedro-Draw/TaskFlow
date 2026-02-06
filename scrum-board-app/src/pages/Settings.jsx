export default function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-neutral-900 p-4 rounded-xl space-y-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Enable Notifications
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Dark Mode
        </label>
      </div>
    </div>
  )
}
