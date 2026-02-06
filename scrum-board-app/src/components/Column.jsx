import TaskCard from './TaskCard'

export default function Column({ title, tasks }) {
  return (
    <div className="bg-neutral-900 rounded-xl p-4 w-full min-w-[260px]">
      <h3 className="text-sm font-semibold mb-4">{title}</h3>

      <div className="flex flex-col gap-3">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
