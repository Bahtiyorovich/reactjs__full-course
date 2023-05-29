import { useState } from 'react'

let nextId = 0;

const AddItem = () => {

    const [name, setName] = useState('')
    const [artists, setArtists] = useState([])

  return (
    <div>
        <h1>useState() yordamida massivga yangi malumot yaratish usuli</h1>
        <input
            className='form-control w-25'
            value={name}
            onChange={e => setName(e.target.value)}
        />
        
            <button 
                className='btn btn-success'
                onClick={() => {
                    setArtists([
                        ...artists,
                        { id: nextId++, name }
                    ])
                }}
            >Add</button>
        
        <ul>
            {artists.map(artist => (
                <li key={artist.id}>{ artist.name }
                    <button type='button'
                        className="btn btn-danger" 
                        onClick={() => {
                            setArtists(artists.filter(item => item.id !== artist.id))}}
                    >Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default AddItem