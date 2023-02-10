import { BsThreeDots } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { Ellipsis, RandomNumber } from "../../../utils";

export function Post({ data, userPost }) {
    return (
        <div className="post">
            {
                data.map((post, index) => (
                    <div key={index} className="post-container">
                        <div className="post-header">
                            <div className="post-header-container">
                                <div className="post-user">
                                    <img className="post-pp" src={userPost[index].pp} />
                                    <p style={{ cursor: "pointer" }}>{post.user.username}</p>
                                </div>
                                <BsThreeDots />
                            </div>
                        </div>
                        <img className="post-image" src={userPost[index].post} />
                        <div className="post-action">
                            <div className="post-action-container">
                                <div className="post-react">
                                    <div className="post-react-button">
                                        <FontAwesomeIcon icon={faHeart} size="xl" />
                                        <FontAwesomeIcon icon={faComment} size="xl" />
                                        <FontAwesomeIcon icon={faPaperPlane} size="xl" />
                                    </div>
                                    <FontAwesomeIcon icon={faBookmark} size="xl" />
                                </div>
                                <div className="post-like">
                                    <p>{RandomNumber(100)} likes</p>
                                </div>
                                <div className="post-caption">
                                    <p><span style={{ fontWeight: "bold" }}>{post.caption.from.username}</span> {Ellipsis({ text: post.caption.text, limit: 54 })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}