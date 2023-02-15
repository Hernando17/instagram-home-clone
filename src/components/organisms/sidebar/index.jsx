import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCompass, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { SlCompass, SlMagnifier, SlCamrecorder, SlBubbles, SlHeart, SlPlus, SlMenu, SlHome } from "react-icons/sl";
import { ImBubbles2 } from "react-icons/im";
import { useSelector } from 'react-redux'
import { currentUser } from '../../../redux/features/userSlice'
import { InstagramTextLogo, InstagramLogo } from '../../../assets';
import { useLocation, Link } from 'react-router-dom';
import { BasicModal, ButtonPrimary } from '../../atoms';

export function Sidebar() {
    const user = useSelector(currentUser);
    const location = useLocation();
    const [createModal, setCreateModal] = useState(false);

    const openCreateModal = () => {
        setCreateModal(true);
    }

    const closeCreateModal = () => {
        setCreateModal(false);
    }

    return (
        <div className="sidebar">
            {
                createModal ? (
                    <BasicModal isOpen={createModal} onClose={closeCreateModal}>
                        <div className="create-modal">
                            <div className="create-modal-title">
                                <span>Create new post</span>
                            </div>
                            <div className="create-modal-container">
                                <div className="create-modal-input">
                                    <ButtonPrimary text="Select from computer" />
                                </div>
                            </div>
                        </div>
                    </BasicModal>
                ) : ("")
            }
            <div className="sidebar-container">
                <img className="sidebar-logo-instagram" src={InstagramTextLogo} />
                <img className="sidebar-logo-ig" src={InstagramLogo} />
                <div className="sidebar-mobile">
                    <div className="sidebar-action">
                        <SlPlus size={24} />
                        <Link to="/notifications" className="sidebar-link">
                            <SlHeart size={24} />
                        </Link>
                    </div>
                </div>
                <div className="sidebar-medium">
                    <ul>
                        <Link to="/" className="sidebar-link">
                            <li>
                                <div className="sidebar-icon">
                                    {
                                        location.pathname == "/" ? (
                                            <FontAwesomeIcon icon={faHouse} size="lg" />
                                        ) : (
                                            <SlHome size={24} />
                                        )
                                    }

                                </div>
                                <span className={location.pathname == "/" ? "active" : ""}>Home</span>
                            </li>
                        </Link>
                        <li>
                            <div className="sidebar-icon">
                                <SlMagnifier size={24} />
                            </div>
                            <span>Search</span>
                        </li>
                        <Link to="/explore" className="sidebar-link">
                            <li>
                                <div className="sidebar-icon">
                                    {
                                        location.pathname == "/explore" ? (
                                            <FontAwesomeIcon icon={faCompass} size="lg" />
                                        ) : (
                                            <SlCompass size={24} />
                                        )
                                    }
                                </div>
                                <span className={location.pathname == "/explore" ? "active" : ""}>Explore</span>
                            </li>
                        </Link>
                        <Link to="/reels" className="sidebar-link">
                            <li>
                                <div className="sidebar-icon">
                                    {
                                        location.pathname == "/reels" ? (
                                            <FontAwesomeIcon icon={faVideoCamera} size="lg" />
                                        ) : (
                                            <SlCamrecorder size={24} />
                                        )
                                    }
                                </div>
                                <span className={location.pathname == "/reels" ? "active" : ""}>Reels</span>
                            </li>
                        </Link>
                        <Link to="/messages" className="sidebar-link">
                            <li>
                                <div className="sidebar-icon">
                                    <div className="sidebar-icon-notification">
                                        <small>2</small>
                                    </div>
                                    {
                                        location.pathname == "/messages" ? (
                                            <ImBubbles2 size={24} />
                                        ) : (
                                            <SlBubbles size={24} />
                                        )

                                    }
                                </div>
                                <span className={location.pathname == "/messages" ? "active" : ""}>Messages</span>
                            </li>
                        </Link>
                        <li>
                            <div className="sidebar-icon">
                                <SlHeart size={24} />
                            </div>
                            <span>Notifications</span>
                        </li>
                        <li onClick={openCreateModal}>
                            <div className="sidebar-icon">
                                <SlPlus size={24} />
                            </div>
                            <span>Create</span>
                        </li>
                        <Link to="/profile" className="sidebar-link">
                            <li>
                                <div className="sidebar-icon">
                                    <img className={location.pathname == "/profile" ? "sidebar-profile active" : "sidebar-profile"} src={user.pp} />
                                </div>
                                <span className={location.pathname == "/profile" ? "active" : ""}>Profile</span>
                            </li>
                        </Link>
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