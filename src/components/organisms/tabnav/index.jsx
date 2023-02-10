import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSearch, faCompass, faVideo, faMessage, faInbox, faAdd, faHeart } from '@fortawesome/free-solid-svg-icons'
import { currentUser } from '../../../redux/features/userSlice'

export function TabNav() {
    const user = useSelector(currentUser);

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
                    <li>
                        <FontAwesomeIcon icon={faMessage} size="lg" />
                    </li>
                    <li>
                        <img src={user.pp} className="tabnav-profile" />
                    </li>
                </ul>
            </div>
        </div>
    )
}