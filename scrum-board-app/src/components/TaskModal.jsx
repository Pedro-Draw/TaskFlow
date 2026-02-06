import { useState } from 'react'

export default function TaskModal({ onClose, onSave }) {
  const [title, setTitle] = useState('')
  const [due, setDue] = useState('')
  const [priority, setPriority] = useState('Normal')

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-xl p-6 w-80">
        <h2 className="font-semibold mb-4">New Task</h2>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type="date"
          className="w-full border p-2 rounded mb-3"
          value={due}
          onChange={e => setDue(e.target.value)}
        />

        <select
          className="w-full border p-2 rounded mb-4"
          value={priority}
          onChange={e => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Normal</option>
          <option>High</option>
        </select>

        <button
          onClick={() => onSave({ title, due, priority })}
          className="w-full bg-black text-white py-2 rounded"
        >
          Add Task
        </button>

        <button
          onClick={onClose}
          className="mt-2 w-full text-sm text-neutral-600"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
