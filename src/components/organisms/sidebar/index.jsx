import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSearch, faCompass, faVideo, faMessage, faInbox, faAdd, faHeart, faBars } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { currentUser } from '../../../redux/features/userSlice'

export function Sidebar() {
    const user = useSelector(currentUser)

    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <img className="sidebar-logo-instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
                <img className="sidebar-logo-ig" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" />
                <div className="sidebar-mobile">
                    <div className="sidebar-action">
                        <FontAwesomeIcon icon={faAdd} size="lg" />
                        <FontAwesomeIcon icon={faHeart} size="lg" />
                    </div>
                </div>
                <div className="sidebar-medium">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faHouse} size="lg" />
                            <span>Home</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSearch} size="lg" color="#333333" />
                            <span>Search</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCompass} size="lg" color="#333333" />
                            <span>Explore</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faVideo} size="lg" color="#333333" />
                            <span>Reels</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMessage} size="lg" color="#333333" />
                            <span>Messages</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInbox} size="lg" color="#333333" />
                            <span>Notifications</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAdd} size="lg" color="#333333" />
                            <span>Create</span>
                        </li>
                        <li>
                            <img className="sidebar-profile" src={user.pp} />
                            <span>Profile</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-more-container">
                    <FontAwesomeIcon className="sidebar-more" icon={faBars} size="lg" color="#333333" />
                    <span>More</span>
                </div>
            </div>
        </div>

    )
}