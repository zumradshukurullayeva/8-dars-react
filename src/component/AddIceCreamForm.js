import { useState } from "react";

const AddIceCreamForm = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handlerSubmit = () => {
        // Yangi post obyekti

        const newObj = {
            iceCream: {
              id: 1,
              name
            },
            inStock: true,
            quantity: 0,
            price,
            description
        };

        // Postni serverga joylash

        fetch('http://localhost:8000/menuData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObj)
        }).then(response => {
            console.log('post qo`shildi');
        });

        // Form elementlarini tozalash
        setName('');
        setPrice('');
        setDescription('');
    }
    

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"  value={name} onChange={(e) => {setName(e.target.value)}}/>
            <br />
            <label htmlFor="price">Price</label>
            <input type="text" id="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
            <br />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            <br />
            <button type="button" onClick={() => handlerSubmit()}>Add Ice Cream</button>
        </form>
    )
}

export default AddIceCreamForm;