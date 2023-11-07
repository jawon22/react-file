import { NavLink, useLocation } from 'react-router-dom';

const Menu = (props) => {
    const location = useLocation();
    // console.log(location);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink to={"/"} className="me-2 navbar-brand">제목</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">

                                <NavLink className={`nav-link ${location.pathname === '/pocketmon' ? 'active' :''}`} to="/pocketmon">포켓몬
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname === '/book' ? 'active' :''}`} to="/book">도서</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname === '/book2' ? 'active' :''}`} to="/book2">도서(무한)</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Menu;