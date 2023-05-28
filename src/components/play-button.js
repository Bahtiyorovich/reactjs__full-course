import {Button} from './'

const PlayButton = ({ movieName }) => {

  const handleUpload = () => {
    alert(`Uploading file ${movieName}`)
  }

  return (
    <div>
        <Button onClick={handleUpload}>Play {movieName}</Button>
    </div>
  )
}

export default PlayButton