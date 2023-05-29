import {useImmer} from 'use-immer'

const UseImmer = () => {

    const [person, updatePerson] = useImmer({
        name: '',
        artwork: {
            title: 'Blue Nana',
            city: 'hamburger',
            image: 'https://www.cgdirector.com/wp-content/uploads/media/2021/02/Adobe-Illustrator-System-Requirements-Facebook-1200-x-628.jpg'
        }
    })

    const handleNameChange = (e) => {
        updatePerson(draft => {
            draft.name = e.target.value
        })
    }

    const handleArtTitleChange = (e) => {
        updatePerson(draft => {
            draft.artwork.title = e.target.value
        })
    }

    const handleArtCityChange = (e) => {
        updatePerson(draft => {
            draft.artwork.city = e.target.value
        })
    }

    const handleArtImageChange = (e) => {
        updatePerson(draft => {
            draft.artwork.image = e.target.value
        })
    }

  return (
    <div className='d-flex flex-column gap-2'>
        <div className="d-flex flex-column gap-2">
            <label>
                Art name: 
                <input
                    className='form-control'
                    onChange={handleNameChange}
                    value={person.name}
                />
            </label>
            <label>
                Art Title: 
                <input
                    className='form-control'
                    onChange={handleArtTitleChange}
                    value={person.artwork.title}
                />
            </label>
            <label>
                Art City: 
                <input
                    className='form-control'
                    onChange={handleArtCityChange}
                    value={person.artwork.city}
                />
            </label>
            <label>
                Art Image Url: 
                <input
                    className='form-control'
                    onChange={handleArtImageChange}
                    value={person.artwork.image}
                />
            </label>
        </div>
        <p>
            <i>{person.artwork.title}</i>
            {' by '}
            {person.name}
            <br/>
            <img src={person.artwork.image} alt={person.artwork.title} className="w-50"/>
        </p>
    </div>
  )
}

export default UseImmer