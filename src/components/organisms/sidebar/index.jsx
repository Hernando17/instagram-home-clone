import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSearch, faCompass, faVideo, faMessage, faInbox, faAdd, faHeart } from '@fortawesome/free-solid-svg-icons'


export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <img className="sidebar-logo-instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
                <div className="sidebar-action">
                    <FontAwesomeIcon icon={faAdd} size="xl" />
                    <FontAwesomeIcon icon={faHeart} size="xl" />
                </div>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHouse} />
                        <span>Home</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSearch} />
                        <span>Search</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCompass} />
                        <span>Explore</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faVideo} />
                        <span>Reels</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMessage} />
                        <span>Messages</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInbox} />
                        <span>Notifications</span>
                    </li>
                    <li><span>Create</span></li>
                    <li><span>Profile</span></li>
                    <li><span>More</span></li>
                </ul>
            </div>
        </div>
    )
}