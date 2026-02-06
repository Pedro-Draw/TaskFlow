export function generateId() {
  return Date.now() + Math.random().toString(16).slice(2)
}

export function filterTasks(tasks, query) {
  if (!query) return tasks

  return tasks.filter(task =>
    task.title.toLowerCase().includes(query.toLowerCase())
  )
}

export function getStats(columns) {
  const allTasks = Object.values(columns).flat()

  const completed = allTasks.filter(t => t.status === 'done').length
  const inProgress = allTasks.filter(t => t.status === 'progress').length
  const overdue = allTasks.filter(t => {
    if (!t.due) return false
    return new Date(t.due) < new Date() && t.status !== 'done'
  }).length

  return {
    total: allTasks.length,
    completed,
    inProgress,
    overdue
  }
}

export function moveTask(columns, taskId, from, to) {
  const source = [...columns[from]]
  const target = [...columns[to]]

  const index = source.findIndex(t => t.id === taskId)
  if (index === -1) return columns

  const [task] = source.splice(index, 1)
  task.status = to

  return {
    ...columns,
    [from]: source,
    [to]: [...target, task]
  }
}
