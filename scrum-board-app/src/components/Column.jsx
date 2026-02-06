import TaskCard from './TaskCard';

export default function Column({
  title,
  tasks = [], // 🔐 fallback CRÍTICO
  onDelete,
  onEdit,
  column
}) {
  return (
    <div className="bg-neutral-900 rounded-xl p-4 w-full min-w-[260px]">
      <h3 className="text-sm font-semibold mb-4">
        {title}
      </h3>

      <div className="flex flex-col gap-3">
        {tasks.length === 0 && (
          <span className="text-xs text-neutral-400">
            No tasks
          </span>
        )}

        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            column={column}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}
