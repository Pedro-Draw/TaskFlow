import DashboardStats from '../components/DashboardStats'
import CalendarView from '../components/CalendarView'

export default function Dashboard() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <DashboardStats />
      <CalendarView />
    </div>
  )
}
