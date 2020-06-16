export const addTask = (task) => {
  return {
    type: 'ADD TASK',
    payload: task
  }
}

export const deleteTask = (number) => {
  return {
    type: 'DELETE TASK',
    payload: number
  }
}
