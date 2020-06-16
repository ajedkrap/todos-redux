const initialState = {
  tasks: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD TASK': {
      const tasks = state.tasks
      tasks.push(action.payload)
      return {
        ...state,
        tasks
      }
      break
    }
    case 'DELETE TASK': {
      const tasks = state.tasks
      tasks.splice(action.payload, 1)
      return {
        ...state,
        tasks
      }
      break
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default todos