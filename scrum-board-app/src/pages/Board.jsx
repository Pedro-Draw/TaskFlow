import { useState } from 'react'
import Column from '../components/Column'
import TaskModal from '../components/TaskModal'

export default function Board() {
  const [showModal, setShowModal] = useState(false)

  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: 'Design login screen', due: 'Apr 25', priority: 'Normal' }
    ],
    progress: [
      { id: 2, title: 'Build dashboard UI', due: 'Apr 26', priority: 'High' }
    ],
    review: [],
    done: []
  })

  function addTask(task) {
    setTasks(prev => ({
      ...prev,
      todo: [...prev.todo, { ...task, id: Date.now() }]
    }))
    setShowModal(false)
  }

  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Column title="To Do" tasks={tasks.todo} />
        <Column title="In Progress" tasks={tasks.progress} />
        <Column title="Review" tasks={tasks.review} />
        <Column title="Completed" tasks={tasks.done} />
      </div>

      {showModal && (
        <TaskModal onClose={() => setShowModal(false)} onSave={addTask} />
      )}
    </div>
  )
}
