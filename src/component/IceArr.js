import { useEffect, useState } from "react";
import Icecream from "./IceCream";
import Loader from "./Loader";

export default function IceArr() {

    const [arr, setArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/menuData/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            console.log(id + ' id li post serverdan o`chirildi')
        });

        const newBannerArr = arr.filter((el) => el.id !== id);
        setArr(newBannerArr);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/menuData',) 
                .then(res => res.json())
                .then(data => {
                    setArr(data);
                    setIsLoading(false);
                });
        }, 2000);
    }, []);

    const iceCreamList = arr.map( el => {
        return (
            <div className="ice-cream" key={el.id}>
                <Icecream
                    id={el.id}
                    image={`img/ice-cream-${el.iceCream.id}.svg`}
                    name= {el.iceCream.name}
                    price={el.price}
                    description={el.description}
                    deleteFunction={handleDelete}
                />
            </div>
        )
    })

    const result = isLoading ? <Loader /> : iceCreamList;

    return (
        <div className="App">
            {result}
        </div>
    )
};