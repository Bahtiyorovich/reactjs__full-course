import {useState} from 'react'

const SubmitForm = () => {

    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('typing')

    if(status === 'success'){
        return <h1 className="fs-3  w-25 alert alert-primary">That's Right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');

        try{
            await submitForm(answer)
            setStatus('success')
        }catch(error){
            setStatus('typing')
            setError(error)
        }
    }

    function handleTextareaChange(e){
        setAnswer(e.target.value)
    }

  return (
    <div>
        <h2>City quiz</h2>
        <p>
            In which city is there a billboard that turns air into drinkable water?
        </p>
        <form onSubmit={handleSubmit}>
            <textarea
                className='form-control w-25'
                value={answer}
                onChange={handleTextareaChange}
                disabled={status === 'submitting'}
            />
            <br/>
            <button disabled={answer.length === 0 || status === 'submitting'} className='btn btn-success'>Submit</button>
            {error !== null && <p className='alert alert-danger w-25 mt-3'>{error.message}</p>}
        </form>
    </div>
  )
}

function submitForm(answer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if(shouldError){
                reject(new Error('Good guess but a wrong answer. Try again!'))
            }else {
                resolve()
            }
        }, 1500)
    })
}
export default SubmitForm
