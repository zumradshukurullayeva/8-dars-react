import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="header">
                <Link to="/">Home</Link>
                <Link to="/add-ice-cream">Add IceCream</Link>
        </header>
    )
}
export default Header;
