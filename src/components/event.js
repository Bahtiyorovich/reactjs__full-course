

const Event = ({onHandleAlert, message, children}) => {
  return (
    <div>
        <button type="button" onClick={onHandleAlert}>Click Me</button>
        <button type="button" onMouseMove={onHandleAlert}>onMouseOver</button>
        <button onClick={() => alert(message)}>
            {children}
        </button>
    </div>
  )
}

export default Event