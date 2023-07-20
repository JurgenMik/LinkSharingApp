import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './ProfileNav.scss';
import Logo from '../assets/logo-devlinks-large.svg';
import LogoSmall from '../assets/logo-devlinks-small.svg';
import {CgProfile, CgEye} from 'react-icons/cg';
import {HiOutlineLink} from 'react-icons/hi';

function ProfileNav() {

    const [activeLink, setActive] = useState<string>();

    const location = useLocation();

    const handleActiveNavLink = () => {
        switch (location.pathname) {
            case '/': {
                return setActive('links');
            }
            case '/profile/details': {
                return setActive('details');
            }
        }
    }

    useEffect(() => {
        handleActiveNavLink();
    }, [])

    const isMobile = window.innerWidth <= 395;

    return (
        <nav className="container-md rounded-3 d-flex justify-content-center flex-column">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-between">
                    <img
                        src={isMobile ? LogoSmall : Logo}
                        alt="logo"
                    />
                    <Link
                        to="/"
                        className="link"
                        id={activeLink === 'links' ? 'active' : ''}
                    >
                        <HiOutlineLink id="nav-icon" />
                        {!isMobile && 'Links'}
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-between">
                    <Link
                        to="/profile/details"
                        className="link"
                        id={activeLink === 'details' ? 'active' : ''}
                    >
                        <CgProfile id="nav-icon" />
                        {!isMobile && 'Profile Details'}
                    </Link>
                    <Link to="" className="link" id="preview">
                        {isMobile ?
                            <CgEye />
                            :
                            'Preview'
                        }
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default ProfileNav;