import { BsBookmark } from "react-icons/bs";
import { SlHeart, SlPaperPlane, SlBubble } from "react-icons/sl";

export function PostReact() {
    return (
        <div className="post-react">
            <div className="post-react-button">
                <SlHeart size={22} className="post-react-icon" />
                <SlBubble size={22} className="post-react-icon" />
                <SlPaperPlane size={22} className="post-react-icon" />
            </div>
            <BsBookmark size={22} className="post-react-icon" />
        </div>
    )
}