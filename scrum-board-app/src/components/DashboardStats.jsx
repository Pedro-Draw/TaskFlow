export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-neutral-900 p-4 rounded-xl">
        <p className="text-sm text-neutral-400">Tasks Completed</p>
        <p className="text-2xl font-bold">20</p>
      </div>

      <div className="bg-neutral-900 p-4 rounded-xl">
        <p className="text-sm text-neutral-400">In Progress</p>
        <p className="text-2xl font-bold">6</p>
      </div>

      <div className="bg-neutral-900 p-4 rounded-xl">
        <p className="text-sm text-neutral-400">Overdue</p>
        <p className="text-2xl font-bold">2</p>
      </div>
    </div>
  )
}
