import { useState } from 'react'

const initialItems = [
    {title: 'salom', id: 0},
    {title: 'hello', id: 1},
    {title: 'Assalomu Alekum', id:3}
]

const SelectedForm = () => {

    const [items, setItems] = useState(initialItems)
    const [selectedId, setSelectedId] = useState(0)

    const selectedItem = items.find(item => item.id === selectedId)

    function handleItemChange(id, e){
        setItems(items.map(item => {
            if(item.id === id){
                return {
                    ...item,
                    title: e.target.value,
                }
            }else {
                return item
            }
        }))
    }

  return (
    <div>
        <h2>What's your travel snack ?</h2>
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <input 
                        value={item.title}
                        onChange={e => {
                            handleItemChange(item.id, e)
                        }}
                    />
                    {' '}
                    <button
                        onClick={() => {
                            setSelectedId(item.id);
                        }}
                    >Choose</button>
                </li>
            ))}
        </ul>
        <p>You Picked {selectedItem.title}</p>
    </div>
  )
}

export default SelectedForm