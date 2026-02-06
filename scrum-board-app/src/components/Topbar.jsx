export default function Topbar({ onMenuClick }) {
  return (
    <header className="flex items-center gap-3 p-4 bg-zinc-950 border-b border-zinc-800">
      <button
        className="sm:hidden text-xl"
        onClick={onMenuClick}
      >
        ☰
      </button>

      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-zinc-800 rounded px-4 py-2 focus:outline-none"
      />

      <button className="p-2 rounded bg-zinc-800">🌙</button>
      <div className="w-8 h-8 rounded-full bg-zinc-600" />
    </header>
  );
}
