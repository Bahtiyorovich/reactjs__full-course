import {useState} from 'react'

const Panel = ({ title, children }) => {

    const [isActive, setIsActive] = useState(false)
    
  return (
    <section className="w-50 card text-center mb-5">
        <h3>{title}</h3>
        {isActive ? (
            <>
                <p className={!isActive ?  "closeanimate" : "myanimate"}>{children}</p>
                <button 
                    className="btn btn-secondary" 
                    onClick={() => 
                        setIsActive(false)
                    }>close</button>
            </>
        ) : (
            <>
                <button onClick={() => setIsActive(true)} className="btn btn-primary">show</button>
            </>
        )}
    </section>
  )
}

export default Panel