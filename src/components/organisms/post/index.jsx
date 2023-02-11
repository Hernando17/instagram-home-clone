import { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { Ellipsis } from "../../../utils";
import { SlHeart, SlPaperPlane, SlBubble, SlOptions } from "react-icons/sl";

export function Post({ data, userPost }) {
    const [detail, setDetail] = useState(null);

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
                                <SlOptions style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                        <img className="post-image" src={userPost[index].post} />
                        <div className="post-action">
                            <div className="post-action-container">
                                <div className="post-react">
                                    <div className="post-react-button">
                                        <SlHeart size={22} />
                                        <SlBubble size={22} />
                                        <SlPaperPlane size={22} />
                                    </div>
                                    <BsBookmark size={22} style={{ cursor: "pointer" }} />
                                </div>
                                <div className="post-like" style={{ cursor: "pointer" }}>
                                    <p>{userPost[index].like} likes</p>
                                </div>
                                <div className="post-caption">
                                    <p><span style={{ fontWeight: "bold", cursor: "pointer" }}>{post.caption.from.username}</span> {Ellipsis({ text: post.caption.text, limit: detail != index ? 54 : 1000 })} {
                                        detail != index && <span style={{ cursor: "pointer", color: "#8e8e8e" }} onClick={() => setDetail(index)}>more</span>
                                    } </p>
                                </div>
                                <div className="post-comment">
                                    <p style={{ color: "#8e8e8e" }}>View all {userPost[index].comment.length} comments</p>
                                </div>
                                <div className="post-time">
                                    <p style={{ color: "#8e8e8e", fontSize: 10 }}>15 MINUTES AGO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}