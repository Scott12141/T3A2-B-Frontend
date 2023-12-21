import { NavLink } from "react-router-dom";

export default function NavBar(props){
    return (
        <nav className="nav">

                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? {color: "rgb(175, 49, 49)", textDecoration: 'none' } : undefined}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dining" style={({isActive}) => isActive ? {color: "rgb(175, 49, 49)", textDecoration: 'none' } : undefined}>
                        Dining
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/beer" style={({isActive}) => isActive ? {color: "rgb(175, 49, 49)", textDecoration: 'none' } : undefined}>
                        Beer
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bookings" style={({isActive}) => isActive ? {color: "rgb(175, 49, 49)", textDecoration: 'none' } : undefined}>
                        Bookings
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" style={({isActive}) => isActive ? {color: "rgb(175, 49, 49)", textDecoration: 'none' } : undefined}>
                        Log In
                    </NavLink>
                </li>
        </nav>
    )
}