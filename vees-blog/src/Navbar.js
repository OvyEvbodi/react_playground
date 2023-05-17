const Navbar = () => {
    return (
        <nav className='navbar navbar-expand'>
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse" id="navbarNavDropdown'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><a className='nav-link' href='/'>Home</a></li>
                    <li className='nav-item'><a className='nav-link' href='/new'>New blog</a></li>
                    <li className='nav-item'><a className='nav-link' href='/pics'>Gallery</a></li>
                </ul>
            </div>
            </div>
        </nav>
    )
};

export default Navbar;
