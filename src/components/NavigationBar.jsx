import { NavLink } from "react-router-dom";

export default function NavBar(props){
    return (
        <nav class="nav">

                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? {color: "red", textDecoration: 'none' } : undefined}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dining" style={({isActive}) => isActive ? {color: "red", textDecoration: 'none' } : undefined}>
                        Dining
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/beer" style={({isActive}) => isActive ? {color: "red", textDecoration: 'none' } : undefined}>
                        Beer
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/booking" style={({isActive}) => isActive ? {color: "red", textDecoration: 'none' } : undefined}>
                        Bookings
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/log-in" style={({isActive}) => isActive ? {color: "red", textDecoration: 'none' } : undefined}>
                        Log In
                    </NavLink>
                </li>
        </nav>
    )
}