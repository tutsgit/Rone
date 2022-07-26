import Nav from '../Nav/Nav'
import './Header.css'
export default function Header({name}) {
    return (
        <div className="header">
            <h1>{name}</h1>
            <Nav/>
        </div>
    )
}