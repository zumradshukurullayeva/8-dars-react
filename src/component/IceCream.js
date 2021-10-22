export default function Icecream(props) {


    return (
        <div className="card">
            <div className="img">
                <img src={props.image} alt="#"/>
            </div>
            <div className="title">   
                <h2 className="card-title">{props.name}</h2>
                <h3 className="card-text">{props.price}</h3>
                <p className="card-small-text">{props.description}</p>
            </div>
            <button type="button" className="btn" onClick={() => props.deleteFunction(props.id)}>Delete Ice Cream</button>
        </div>
    );
    
}
