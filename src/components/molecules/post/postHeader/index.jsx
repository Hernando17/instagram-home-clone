import { SlOptions } from "react-icons/sl";

export function PostHeader({ user, post }) {
    return (
        <div className="post-header">
            <div className="post-header-container">
                <div className="post-user">
                    <img className="post-pp" src={user.pp} />
                    <a href="#" className="post-username">{post.user.username}</a>
                    <span className="post-head-time">• 15m</span>
                </div>
                <SlOptions className="post-react-icon" />
            </div>
        </div>
    )
}