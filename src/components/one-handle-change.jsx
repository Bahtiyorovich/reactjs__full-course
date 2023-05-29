import {useState} from 'react'

const OneHandleChange = () => {

    const [count, setCount] = useState(0)

    const [person, setPerson] = useState({
        fname: '',
        lname: '',
        email: ''
    })

    const handleChange = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    const handleCount = () => {setCount(count => count + 1)}

    const handleReset = () => {setCount(0)}

  return (
    <div className="d-flex mt-5 flex-md-row flex-column p-3 rounded shadow mx-auto align-items-center justify-content-center">
        <div className="d-flex flex-column w-50">
            <label className="form-label w-50">
                FirstName:
                <input
                    name="fname"
                    value={person.fname}
                    onChange={handleChange}
                    className='form-control'
                />
            </label>
            <label className='form-label w-50'>
                LastName:
                <input
                    name="lname"
                    value={person.lname}
                    onChange={handleChange}
                    className='form-control'
                />
            </label>
            <label className='form-label w-50'>
                Email Address:
                <input
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                    className='form-control'
                />
            </label>
        </div>
        <div class="card w-25 p-3">
            <p>{person.fname}</p>
            <p>{person.lname}</p>
            <p>{person.email}</p>
        </div>

        <div className="card ms-5 p-3">
            <p>Count: {count}</p>
            <button type='button' className="btn btn-primary" onClick={handleCount}>Click</button>
            <button type="button" className="btn btn-danger" onClick={handleReset}>Reset</button>
        </div>

    </div>
  )
}

export default OneHandleChange