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
                        Home
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSearch} />
                        Search
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCompass} />
                        Explore
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faVideo} />
                        Reels
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMessage} />
                        Messages
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInbox} />
                        Notifications
                    </li>
                    <li>Create</li>
                    <li>Profile</li>
                    <li>More</li>
                </ul>
            </div>
        </div>
    )
}