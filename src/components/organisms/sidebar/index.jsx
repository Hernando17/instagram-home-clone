import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { currentUser } from '../../../redux/features/userSlice'
import { SlCompass, SlMagnifier, SlCamrecorder, SlBubbles, SlHeart, SlPlus, SlMenu } from "react-icons/sl";

export function Sidebar() {
    const user = useSelector(currentUser)

    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <img className="sidebar-logo-instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
                <img className="sidebar-logo-ig" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" />
                <div className="sidebar-mobile">
                    <div className="sidebar-action">
                        <SlPlus size={24} />
                        <SlHeart size={24} />
                    </div>
                </div>
                <div className="sidebar-medium">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faHouse} size="lg" />
                            <span><h4>Home</h4></span>
                        </li>
                        <li>
                            <SlMagnifier size={24} />
                            <span>Search</span>
                        </li>
                        <li>
                            <SlCompass size={24} />
                            <span>Explore</span>
                        </li>
                        <li>
                            <SlCamrecorder size={24} />
                            <span>Reels</span>
                        </li>
                        <li>
                            <SlBubbles size={24} />
                            <span>Messages</span>
                        </li>
                        <li>
                            <SlHeart size={24} />
                            <span>Notifications</span>
                        </li>
                        <li>
                            <SlPlus size={24} />
                            <span>Create</span>
                        </li>
                        <li>
                            <img className="sidebar-profile" src={user.pp} />
                            <span>Profile</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-more-container">
                    <SlMenu size={24} />
                    <span>More</span>
                </div>
            </div>
        </div>

    )
}