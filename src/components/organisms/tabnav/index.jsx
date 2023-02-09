import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSearch, faCompass, faVideo, faMessage, faInbox, faAdd, faHeart } from '@fortawesome/free-solid-svg-icons'

export function TabNav() {
    return (
        <div className="tabnav">
            <div className="tabnav-container">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHouse} size="lg" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faVideo} size="lg" />
                    </li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    )
}