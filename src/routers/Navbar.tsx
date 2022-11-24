import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.scss';

function Navbar() {
    React.useEffect(() => {
        console.log("mounted")
        return () => { console.log("unmounted") }
    }, [])
    return (
        <div className="navbarContainer">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to={`/profile`}>Profile</Link>
                    </li>
                    <li>
                        <Link to={`/settings`}>Settings</Link>
                    </li>
                    <li>
                        <Link to={`/products`}>Products</Link>
                    </li>
                    <li>
                        <Link to={`/about`}>About</Link>
                    </li>
                    <li>
                        <Link to={`/details`}>Details</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar