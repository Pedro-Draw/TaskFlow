export default function Toast({ message, onClose }) {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-zinc-800 px-6 py-3 rounded shadow-lg z-50 animate-slideDown">
      <div className="flex items-center gap-3">
        <span>{message}</span>
        <button onClick={onClose} className="text-sm opacity-70">✕</button>
      </div>
    </div>
  );
}
