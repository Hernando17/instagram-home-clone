import { FaRegHeart, FaHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

export function PostReact({ index, isLiked, likeAction, dislikeAction }) {
    return (
        <div className="post-react">
            <div className="post-react-button">
                {
                    isLiked ? <FaHeart size={22} style={{ color: "#ed4956" }} id={index} className="post-react-icon" onClick={dislikeAction} /> : <FaRegHeart size={22} className="post-react-icon" id={index} onClick={likeAction} />
                }
                <FaRegComment size={22} className="post-react-icon" />
                <FaRegPaperPlane size={22} className="post-react-icon" />
            </div>
            <FaRegBookmark size={22} className="post-react-icon" />
        </div>
    )
}