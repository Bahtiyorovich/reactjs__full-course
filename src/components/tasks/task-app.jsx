import {useReducer} from 'react'
import {AddTask, TaskList} from '../'
import taskReducer from './../../reducer/task-reducer';
import { initialTask } from '../../constants/data';


const TaskApp = () => {

  const [tasks, dispatch] = useReducer(taskReducer, initialTask)

  function handleAddTask(text){
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }

  function handleChangeTask(task){
    dispatch({
      type: 'changed',
      task: task,
    })
  }

  function handleDeleteTask(taskId){
    dispatch({
      type: 'deleted',
      id:taskId
    })
  }

  let nextId = 3;

  return (
    <div className='bg-light'>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  )
}

export default TaskApp