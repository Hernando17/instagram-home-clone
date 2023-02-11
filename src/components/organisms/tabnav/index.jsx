import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSearch, faCompass, faVideo, faMessage, faInbox, faAdd, faHeart } from '@fortawesome/free-solid-svg-icons'
import { currentUser } from '../../../redux/features/userSlice'
import { SlCompass, SlMagnifier, SlCamrecorder, SlBubbles, SlHeart, SlPlus, SlMenu } from "react-icons/sl";

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
                        <SlMagnifier size={24} />
                    </li>
                    <li>
                        <SlCamrecorder size={24} />
                    </li>
                    <li>
                        <SlBubbles size={24} />
                    </li>
                    <li>
                        <img src={user.pp} className="tabnav-profile" />
                    </li>
                </ul>
            </div>
        </div>
    )
}