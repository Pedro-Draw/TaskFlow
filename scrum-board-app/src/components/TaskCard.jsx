export default function TaskCard({ task }) {
  return (
    <div className="bg-neutral-800 p-3 rounded-lg hover:bg-neutral-700 transition">
      <div className="flex items-center gap-2">
        <img
          src="https://i.pravatar.cc/30"
          className="w-6 h-6 rounded-full"
        />
        <div className="text-sm font-medium">{task.title}</div>
      </div>

      <div className="flex justify-between items-center mt-2 text-xs text-neutral-400">
        <span>{task.due}</span>
        <span className="px-2 py-0.5 bg-neutral-700 rounded">
          {task.priority}
        </span>
      </div>
    </div>
  )
}
