import { useState } from 'react';
import Column from '../components/Column';
import TaskModal from '../components/TaskModal';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Board({ triggerToast = () => {} }) {
  const [showModal, setShowModal] = useState(false);

  const [tasks, setTasks] = useLocalStorage('tasks', {
    todo: [],
    progress: [],
    review: [],
    done: []
  });

  // 🔐 Proteção contra undefined / localStorage corrompido
  const safeTasks = {
    todo: Array.isArray(tasks?.todo) ? tasks.todo : [],
    progress: Array.isArray(tasks?.progress) ? tasks.progress : [],
    review: Array.isArray(tasks?.review) ? tasks.review : [],
    done: Array.isArray(tasks?.done) ? tasks.done : []
  };

  const addTask = (task) => {
    setTasks(prev => ({
      ...prev,
      todo: [...safeTasks.todo, { ...task, id: Date.now() }]
    }));
    setShowModal(false);
    triggerToast?.('Task added successfully!');
  };

  const deleteTask = (column, taskId) => {
    setTasks(prev => ({
      ...prev,
      [column]: prev[column].filter(t => t.id !== taskId)
    }));
    triggerToast?.('Task deleted!');
  };

  const editTask = (column, updatedTask) => {
    setTasks(prev => ({
      ...prev,
      [column]: prev[column].map(t =>
        t.id === updatedTask.id ? updatedTask : t
      )
    }));
    triggerToast?.('Task updated!');
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tasks</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black px-4 py-2 rounded-lg font-medium"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Column
          title="To Do"
          column="todo"
          tasks={safeTasks.todo}
          onDelete={deleteTask}
          onEdit={editTask}
        />

        <Column
          title="In Progress"
          column="progress"
          tasks={safeTasks.progress}
          onDelete={deleteTask}
          onEdit={editTask}
        />

        <Column
          title="Review"
          column="review"
          tasks={safeTasks.review}
          onDelete={deleteTask}
          onEdit={editTask}
        />

        <Column
          title="Completed"
          column="done"
          tasks={safeTasks.done}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </div>

      {showModal && (
        <TaskModal
          onClose={() => setShowModal(false)}
          onSave={addTask}
        />
      )}
    </div>
  );
}
