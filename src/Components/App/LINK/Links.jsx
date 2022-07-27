import './Links.css';
export default function Links({arr}) {
    return(
        <>
            {
            arr.map(({id, name, age}, idx) => (
                <h5>{name}</h5>
            ))
        }
        </>
    )
}