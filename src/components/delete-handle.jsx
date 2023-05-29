import React, { useState } from 'react'

const data = [
    {
        id:1,
        name: "NextJs"
    },
    {
        id:2,
        name:"NestJs"
    },
    {
        id:3,
        name:"ExpressJs"
    }
]

const DeleteHandle = () => {

    const [js, setJs] = useState(data)

  return (
    <>
        <h1>Ma'lumotlarni o'chirish Tugmasiga funksiya yozish</h1>
        <ul>
            {js.map(i => (
                <li key={i.id}>
                    {i.name}
                    <button
                        className='btn btn-danger ms-3' 
                        type='button' 
                        onClick={() => {
                            setJs(
                                js.filter(a => a.id !== i.id)
                            )
                        }}
                    >Delete</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default DeleteHandle