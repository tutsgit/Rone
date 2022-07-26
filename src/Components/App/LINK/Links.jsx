import './Links.css';
export default function Links({id, name, age}) {
    return(
        <div>
            <h1>{name}</h1>
            <h5>{age}</h5>
            <h6>{id}</h6>
        </div>
    )
}