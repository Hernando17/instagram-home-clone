import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";

export function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Instagram</h1>
            <ul>
                <li>
                    <AiFillHome />
                    Home
                </li>
                <li>
                    <AiOutlineSearch />
                    Search
                </li>
                <li>
                    <MdOutlineExplore />
                    Explore
                </li>
                <li>Reels</li>
                <li>Messages</li>
                <li>Notifications</li>
                <li>Create</li>
                <li>Profile</li>
                <li>More</li>
            </ul>
        </div>
    )
}