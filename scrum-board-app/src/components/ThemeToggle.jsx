import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
