import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCompass, faVideoCamera, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { SlCompass, SlMagnifier, SlCamrecorder, SlBubbles, SlHeart, SlPlus, SlMenu, SlHome } from "react-icons/sl";
import { useSelector } from 'react-redux'
import { currentUser } from '../../../redux/features/userSlice'
import { InstagramTextLogo, InstagramLogo } from '../../../assets';
import { useLocation, Link } from 'react-router-dom';

export function Sidebar() {
    const user = useSelector(currentUser);
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <img className="sidebar-logo-instagram" src={InstagramTextLogo} />
                <img className="sidebar-logo-ig" src={InstagramLogo} />
                <div className="sidebar-mobile">
                    <div className="sidebar-action">
                        <SlPlus size={24} />
                        <SlHeart size={24} />
                    </div>
                </div>
                <div className="sidebar-medium">
                    <ul>
                        <Link to="/" className="sidebar-link">
                            <li>
                                <div className="sidebar-icon">
                                    {
                                        location.pathname == "/" ? (
                                            <FontAwesomeIcon icon={faHouse} size="lg" />
                                        ) : (
                                            <SlHome size={24} />
                                        )
                                    }

                                </div>
                                <span className={location.pathname == "/" ? "active" : ""}>Home</span>
                            </li>
                        </Link>
                        <li>
                            <div className="sidebar-icon">
                                <SlMagnifier size={24} />
                            </div>
                            <span>Search</span>
                        </li>
                        <Link to="/explore" className="sidebar-link">
                            <li>
                                <div className="sidebar-icon">
                                    {
                                        location.pathname == "/explore" ? (
                                            <FontAwesomeIcon icon={faCompass} size="lg" />
                                        ) : (
                                            <SlCompass size={24} />
                                        )
                                    }
                                </div>
                                <span className={location.pathname == "/explore" ? "active" : ""}>Explore</span>
                            </li>
                        </Link>
                        <Link to="/reels" className="sidebar-link">
                            <li>
                                <div className="sidebar-icon">
                                    {
                                        location.pathname == "/reels" ? (
                                            <FontAwesomeIcon icon={faVideoCamera} size="lg" />
                                        ) : (
                                            <SlCamrecorder size={24} />
                                        )
                                    }
                                </div>
                                <span className={location.pathname == "/reels" ? "active" : ""}>Reels</span>
                            </li>
                        </Link>
                        <li>
                            <div className="sidebar-icon">
                                <div className="sidebar-icon-notification">
                                    <small>2</small>
                                </div>
                                <SlBubbles size={24} />
                            </div>
                            <span>Messages</span>
                        </li>
                        <li>
                            <div className="sidebar-icon">
                                <SlHeart size={24} />
                            </div>
                            <span>Notifications</span>
                        </li>
                        <li>
                            <div className="sidebar-icon">
                                <SlPlus size={24} />
                            </div>
                            <span>Create</span>
                        </li>
                        <li>
                            <div className="sidebar-icon">
                                <img className="sidebar-profile" src={user.pp} />
                            </div>
                            <span>Profile</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-more-container">
                    <div className="sidebar-icon">
                        <SlMenu size={24} />
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>

    )
}