import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Board from "./pages/Board";
import Calendar from "./pages/Calendar";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Toast from "./components/Toast";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const triggerToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000); // desaparece após 3s
  };

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} flex min-h-screen w-full overflow-x-hidden`}>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col w-full overflow-x-hidden">
        <Topbar
          onMenuClick={() => setSidebarOpen(true)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main className="p-4 sm:p-6 overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/board" element={<Board triggerToast={triggerToast} />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings triggerToast={triggerToast} darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>
        </main>
      </div>

      {toast && <Toast message={toast} />}
    </div>
  );
}
