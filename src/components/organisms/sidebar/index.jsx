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
                <div>
                    <img className="sidebar-logo-ig" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" />
                    <div className="sidebar-action">
                        <FontAwesomeIcon icon={faAdd} size="xl" />
                        <FontAwesomeIcon icon={faHeart} size="xl" />
                    </div>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faHouse} size="xl" />
                            <span>Home</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSearch} size="xl" />
                            <span>Search</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCompass} size="xl" />
                            <span>Explore</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faVideo} size="xl" />
                            <span>Reels</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMessage} size="xl" />
                            <span>Messages</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInbox} size="xl" />
                            <span>Notifications</span>
                        </li>
                        <li><img className="sidebar-profile" src={user.pp} /></li>
                    </ul>
                </div>
                <FontAwesomeIcon className="sidebar-more" icon={faBars} size="xl" />
            </div>
        </div>
    )
}