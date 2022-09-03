import { Link } from "react-router-dom"
import "./navbar.styles.scss"
import { Outlet } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__list__item">
                        <Link to="home">
                            Home
                        </Link>
                    </li>
                    <li className="navbar__list__item">
                        <Link to="register-user">
                            Register User
                        </Link>
                    </li>
                    <li className="navbar__list__item">
                        <Link to="update-user">
                            Update User
                        </Link>
                    </li>
                    <li className="navbar__list__item">
                        <Link to="del-user">
                            Delete User
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar