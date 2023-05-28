import { useState } from "react"
import { sculptureList } from "../constants/data"

const UseState = () => {

    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    const handleClick = () => {
        setIndex(index + 1)
    }

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index]

  return (
    <div className="card mt-5 w-75 mx-auto p-5">
        <button type="button" onClick={handleClick} className="btn btn-primary w-25">Next</button>
        <h2>
            <i>{sculpture.name}</i>
            by {sculpture.artist}
        </h2>
        <h3>({index + 1} of {sculptureList.length})</h3>
        <div className="d-flex gap-2">
            <img
                className="w-25"
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <div>
                <button type="button" className="btn btn-warning" onClick={handleShowMore}>{showMore ? 'show' : 'hide'} More</button>
                <p className="card-body " style={{maxWidth:'550px'}}>{!showMore ? sculpture.description.slice(0, 30) : sculpture.description}</p>
            </div>
        </div>
    </div> 
  )
}

export default UseState