export default function TaskCard({ task, column, onDelete, onEdit }) {
  return (
    <div className="bg-neutral-800 p-3 rounded-lg hover:bg-neutral-700 transition flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/30"
            className="w-6 h-6 rounded-full"
          />
          <div className="text-sm font-medium">{task.title}</div>
        </div>

        <div className="flex gap-2">
          <button onClick={() => onEdit(column, { ...task, title: prompt("Edit title:", task.title) || task.title })} className="text-xs text-blue-400">Edit</button>
          <button onClick={() => onDelete(column, task.id)} className="text-xs text-red-500">Delete</button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2 text-xs text-neutral-400">
        <span>{task.due}</span>
        <span className="px-2 py-0.5 bg-neutral-700 rounded">{task.priority}</span>
      </div>
    </div>
  );
}
