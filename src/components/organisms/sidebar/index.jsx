import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { currentUser } from '../../../redux/features/userSlice'
import { SlCompass, SlMagnifier, SlCamrecorder, SlBubbles, SlHeart, SlPlus, SlMenu } from "react-icons/sl";
import { InstagramTextLogo, InstagramLogo } from '../../../assets';

export function Sidebar() {
    const user = useSelector(currentUser)

    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <img className="sidebar-logo-instagram" src={InstagramTextLogo} />
                <img className="sidebar-logo-ig" src={InstagramLogo} />
                <div className="sidebar-mobile">
                    <div className="sidebar-action">
                        <SlPlus size={24} />
                        <SlHeart size={24} />
                    </div>
                </div>
                <div className="sidebar-medium">
                    <ul>
                        <li>
                            <div className="sidebar-icon">
                                <FontAwesomeIcon icon={faHouse} size="lg" />
                            </div>
                            <span className="active">Home</span>
                        </li>
                        <li>
                            <div className="sidebar-icon">
                                <SlMagnifier size={24} />
                            </div>
                            <span>Search</span>
                        </li>
                        <li>
                            <div className="sidebar-icon">
                                <SlCompass size={24} />
                            </div>
                            <span>Explore</span>
                        </li>
                        <li>
                            <div className="sidebar-icon">
                                <SlCamrecorder size={24} />
                            </div>
                            <span>Reels</span>
                        </li>
                        <li>
                            <div className="sidebar-icon">
                                <div className="sidebar-icon-notification">
                                    <small>2</small>
                                </div>
                                <SlBubbles size={24} />
                            </div>
                            <span>Messages</span>
                        </li>
                        <li>
                            <div className="sidebar-icon">
                                <SlHeart size={24} />
                            </div>
                            <span>Notifications</span>
                        </li>
                        <li>
                            <div className="sidebar-icon">
                                <SlPlus size={24} />
                            </div>
                            <span>Create</span>
                        </li>
                        <li>
                            <div className="sidebar-icon">
                                <img className="sidebar-profile" src={user.pp} />
                            </div>
                            <span>Profile</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-more-container">
                    <div className="sidebar-icon">
                        <SlMenu size={24} />
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>

    )
}