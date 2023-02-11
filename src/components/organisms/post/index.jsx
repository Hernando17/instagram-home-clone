import { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { Ellipsis } from "../../../utils";
import { SlHeart, SlPaperPlane, SlBubble, SlOptions, SlEmotsmile } from "react-icons/sl";

export function Post({ data, userPost }) {
    const [detail, setDetail] = useState([]);
    const [postComment, setPostComment] = useState([]);

    function openDetail(e) {
        e.preventDefault();
        setDetail({
            ...detail,
            [e.target.id]: {
                id: e.target.id
            }
        });
    }

    function setComment(e) {
        e.preventDefault();
        setPostComment({
            ...postComment,
            [e.target.id]: {
                value: e.target.value,
                id: e.target.id
            }
        });
    }

    function clearComment(e) {
        e.preventDefault();
        setPostComment({
            ...postComment,
            [e.target.id]: {
                value: "",
                id: e.target.id
            }
        });
    }

    return (
        <div className="post">
            {
                data.map((post, index) => (
                    <div key={index} className="post-container">
                        <div className="post-header">
                            <div className="post-header-container">
                                <div className="post-user">
                                    <img className="post-pp" src={userPost[index].pp} />
                                    <p style={{ cursor: "pointer", fontSize: 14, fontWeight: 600 }}>{post.user.username}</p>
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
                                <div className="post-like" style={{ cursor: "pointer", fontSize: 14 }}>
                                    <p>{userPost[index].like} likes</p>
                                </div>
                                <div className="post-caption">
                                    <p style={{ fontSize: 14 }}><span style={{ fontWeight: 600, fontSize: 14, cursor: "pointer" }}>{post.caption.from.username}</span> {Ellipsis({ text: post.caption.text, limit: !detail[index] ? 40 : 1000 })} {
                                        !detail[index] && post.caption.text.length > 40 ? (<span style={{ cursor: "pointer", color: "#8e8e8e" }} id={index} onClick={openDetail}>more</span>) : ("")
                                    } </p>
                                </div>
                                <div className="post-comment">
                                    <p style={{ color: "#8e8e8e", fontSize: 14 }}>View all {userPost[index].comment.length} comments</p>
                                </div>
                                {userPost[index].comment.slice(0, 1).map((comment, number) => (
                                    <div className="post-caption" key={number}>
                                        <p style={{ fontSize: 14 }}><span style={{ fontWeight: 600, cursor: "pointer", fontSize: 14 }}>{comment.username}</span> {comment.comment} </p>
                                    </div>
                                ))}
                                <div className="post-input">
                                    <input type="text" id={index} value={!postComment[index] ? "" : postComment[index].value} onChange={setComment} className="post-comment-input" placeholder="Add a comment..." />
                                    <div className="post-comment-action">
                                        {
                                            !postComment[index] || postComment[index].value == "" ? ("") : (<span style={{ color: "#0095f6", cursor: "pointer", fontSize: 14 }} id={index} onClick={clearComment}>Post</span>)
                                        }

                                        <SlEmotsmile size={12} style={{ cursor: "pointer" }} color="#8e8e8e" />
                                    </div>
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