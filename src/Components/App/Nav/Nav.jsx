import './Nav.css'
import Links from '../LINK/Links';
export default function Nav() {
    const links_arr = [
        {
            id: 1,
            name: 'Aaaaa',
            age: 25
        },
        {
            id: 2,
            name: 'Ammmm',
            age: 25
        }
    ];
    return (
        <div className="nav">
            <h1>Company Name</h1>
            {
                links_arr.map((lnk, i) => (
                    <Links arr = {lnk} key={i}/>
                ))
            }
        </div>
    )
}