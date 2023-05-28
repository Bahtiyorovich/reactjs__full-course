import { Event, FormSelect, Tolbar, UseState } from "./components"

const App = () => {

  const handleAlert = () => {
    alert('You cliced me')
  }

  return (
    <div className="container">
      {/* <Event message="Upload file" onHandleAlert={handleAlert}/> */}
      {/* <Tolbar/> */}
      {/* <UseState/> */}
      <FormSelect/>
    </div>
  )
}

export default App