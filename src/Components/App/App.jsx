import Header from "./Header/Header";
import Search from "./Search/Search";

export default function App() {
    const Name = 'Company-Name';
    return (
        <>
            <Header company = {Name}/>
            <Search />
        </>
    )
}