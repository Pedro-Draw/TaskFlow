export default function Toast({ message }) {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slideDown">
      {message}
    </div>
  );
}
