import React from "react";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header>
            {/*<a href="/">Home</a>*/}
            {/*<a href="/search">Search</a>*/}
                <Link to={'/'}>Home</Link>
                <Link to={'/search'}>Search</Link>
        </header>
    )
}
export default Header;