import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCompass, faVideoCamera, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SlCompass, SlMagnifier, SlCamrecorder, SlBubbles, SlHeart, SlPlus, SlMenu, SlHome } from "react-icons/sl";
import { ImBubbles2 } from "react-icons/im";
import { currentUser } from '../../../redux/features/userSlice'
import { Link, useLocation } from 'react-router-dom'

export function TabNav() {
    const user = useSelector(currentUser);
    const location = useLocation();

    return (
        <div className="tabnav">
            <div className="tabnav-container">
                <ul>
                    <Link to="/" className="tabnav-link">
                        <li>
                            <div className="tabnav-icon">
                                {
                                    location.pathname == "/" ? (
                                        <FontAwesomeIcon icon={faHouse} size="xl" />
                                    ) : (
                                        <SlHome size={24} />
                                    )
                                }
                            </div>
                        </li>
                    </Link>
                    <Link to="/explore" className="tabnav-link">
                        <li>
                            <div className="tabnav-icon">
                                {
                                    location.pathname == "/explore" ? (
                                        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                                    ) : (
                                        <SlMagnifier size={24} />
                                    )
                                }
                            </div>
                        </li>
                    </Link>
                    <Link to="/reels" className="tabnav-link">
                        <li>
                            <div className="tabnav-icon">
                                {
                                    location.pathname == "/reels" ? (
                                        <FontAwesomeIcon icon={faVideoCamera} size="xl" />
                                    ) : (
                                        <SlCamrecorder size={24} />
                                    )
                                }
                            </div>
                        </li>
                    </Link>
                    <Link to="/messages" className="tabnav-link">
                        <li>
                            <div className="tabnav-icon">
                                <div className="tabnav-icon-notification">
                                    <small>2</small>
                                </div>
                                {
                                    location.pathname == "/messages" ? (
                                        <ImBubbles2 size={24} />
                                    ) : (
                                        <SlBubbles size={24} />
                                    )
                                }

                            </div>
                        </li>
                    </Link>
                    <Link to="/profile" className="tabnav-link">
                        <li>
                            <div className="tabnav-icon">
                                <img src={user.pp} className={location.pathname == "/profile" ? "tabnav-profile active" : "tabnav-profile"} />
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}