import { Accordion, AddItem, DeleteHandle, Event, FormChange, FormSelect, OneHandleChange, PointerMove, SelectedForm, SubmitForm, TaskApp, Tolbar, UseImmer, UseState } from "./components"
import TasksApp from "./components/reducer-with-context/TasksApp"

const App = () => {

  const handleAlert = () => {
    alert('You cliced me')
  }

  return (
    <div className="container">
      {/* <Event message="Upload file" onHandleAlert={handleAlert}/> */}
      {/* <Tolbar/> */}
      {/* <UseState/> */}
      {/* <FormSelect/> */}
      {/* <PointerMove/> */}
      {/* <FormChange/> */}
      {/* <OneHandleChange/> */}
      {/* <UseImmer/> */}
      {/* <DeleteHandle/> */}
      {/* <AddItem/> */}
      {/* <SubmitForm/> */}
      {/* <SelectedForm/> */}
      {/* <Accordion/> */}
      <TasksApp/>
    </div>
  )
}

export default App