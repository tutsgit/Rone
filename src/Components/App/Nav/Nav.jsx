import './Nav.css'
import Links from '../LINK/Links';
export default function Nav() {
    const _arr = [
        {id: 1,name: 'Aaaaa',age: 25},
        {id: 2,name: 'Ammmm',age: 25}
    ];
    return (
        <div className="nav">
            <h1>Am Company</h1>
            <Links arr = {_arr}/>
        </div>
    )
}