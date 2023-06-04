import { useReducer } from 'react';
import { tasksReducer } from './tasks-reducer';
import { initialTasks } from './data';
import {TasksContext, TasksDispatchContext} from './TasksContext'

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(
      tasksReducer,
      initialTasks
    );
  
    return (
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    );
  }