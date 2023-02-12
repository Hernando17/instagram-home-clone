import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { currentUser } from '../../../redux/features/userSlice'
import { SlMagnifier, SlCamrecorder, SlBubbles } from "react-icons/sl";

export function TabNav() {
    const user = useSelector(currentUser);

    return (
        <div className="tabnav">
            <div className="tabnav-container">
                <ul>
                    <li>
                        <div className="tabnav-icon">
                            <FontAwesomeIcon icon={faHouse} size="lg" />
                        </div>
                    </li>
                    <li>
                        <div className="tabnav-icon">
                            <SlMagnifier size={24} />
                        </div>
                    </li>
                    <li>
                        <div className="tabnav-icon">
                            <SlCamrecorder size={24} />
                        </div>
                    </li>
                    <li>
                        <div className="tabnav-icon">
                            <div className="tabnav-icon-notification">
                                <small>2</small>
                            </div>
                            <SlBubbles size={24} />
                        </div>
                    </li>
                    <li>
                        <div className="tabnav-icon">
                            <img src={user.pp} className="tabnav-profile" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}