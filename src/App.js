import { Accordion, AddItem, DeleteHandle, Event, FormChange, FormSelect, OneHandleChange, PointerMove, SelectedForm, SubmitForm, TaskApp, Tolbar, UseImmer, UseState } from "./components"

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
      <TaskApp/>
    </div>
  )
}

export default App