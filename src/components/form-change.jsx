import {useState} from 'react'

const FormChange = () => {

    const [person, setPerson] = useState({
        fname: '',
        lname: '',
        email: ''
    })

    const handleFnameChange = (e) => {
        setPerson({
            ...person,
            fname: e.target.value
        })
    }

    const handleLnameChange = (e) => {
        setPerson({
            ...person,
            lname: e.target.value
        })
    }

    const handleEmailChange = (e) => {
        setPerson({
            ...person,
            email: e.target.value
        })
    }


  return (
    <div className='w-25 card p-5 d-flex flex-column gap-2 mx-auto'>
        <label className="form-label">
            FirstName: 
            <input 
                className="form-control"
                value={person.fname}
                onChange={handleFnameChange}
            />
        </label>
        <label className="form-label">
            LastName: 
            <input 
                className="form-control"
                value={person.lname}
                onChange={handleLnameChange}
            />
        </label>
        <label className="form-label">
            Email Address: 
            <input 
                className="form-control"
                value={person.email}
                onChange={handleEmailChange}
            />
        </label>
        <p className="fs-5">
            {person.fname}
        </p>
        <p>
            {person.lname}
        </p>
        <p>
            {person.email}
        </p>

    </div>
  )
}

export default FormChange