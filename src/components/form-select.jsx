import {useState} from 'react'

const FormSelect = () => {

    const [to, setTo] = useState('Sherzod')
    const [message, setMessage] = useState('Hello')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(() => {
            alert(`You said ${message} to ${to}`)
        }, 1000)
    }

  return (
    <div className="container w-50 mt-5 p-5 card">
        <form action="">
            <label className='form-label'>
                To: {' '}
                <select
                    className="form-select mt-3"
                    value={to}
                    onChange={e => setTo(e.target.value)}
                >
                    <option value="Sherzod">Sherzod</option>
                    <option value="Aziza">Aziza</option>
                </select>
            </label>
            <textarea
                className='form-control'
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type='submit' className="btn btn-success mt-5" onClick={handleSubmit}>send</button>
        </form>
    </div>
  )
}

export default FormSelect