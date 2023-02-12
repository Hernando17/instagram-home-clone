import { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { Ellipsis } from "../../../utils";
import { SlHeart, SlPaperPlane, SlBubble, SlOptions, SlEmotsmile } from "react-icons/sl";
import { colors } from "../../../themes";
import { InputComment, StoryPostReact } from "../../../components";


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
                                    <a href="#" className="post-username">{post.user.username}</a>
                                </div>
                                <SlOptions className="post-react-icon" />
                            </div>
                        </div>
                        <img className="post-image" src={userPost[index].post} />
                        <div className="post-action">
                            <div className="post-action-container">
                                <StoryPostReact />
                                <div className="post-like" style={{ cursor: "pointer", fontSize: 14 }}>
                                    <p>{userPost[index].like} likes</p>
                                </div>
                                <div className="post-caption">
                                    <p style={{ fontSize: 14 }}><a href="#" className="post-username">{post.caption.from.username}</a> {Ellipsis({ text: post.caption.text, limit: !detail[index] ? 40 : 1000 })} {
                                        !detail[index] && post.caption.text.length > 40 ? (<span style={{ cursor: "pointer", color: colors.gray }} id={index} onClick={openDetail}>more</span>) : ("")
                                    } </p>
                                </div>
                                <div className="post-comment">
                                    <p style={{ color: colors.gray, fontSize: 14 }}>View all {userPost[index].comment.length} comments</p>
                                </div>
                                {userPost[index].comment.slice(0, 1).map((comment, number) => (
                                    <div className="post-caption" key={number}>
                                        <p style={{ fontSize: 14 }}><a href="#" className="post-username">{comment.username}</a> {comment.comment} </p>
                                    </div>
                                ))}
                                <div className="post-input">
                                    <InputComment index={index} postComment={postComment} onChange={setComment} placeholder="Add a comment..." />
                                    <div className="post-comment-action">
                                        {
                                            !postComment[index] || postComment[index].value == "" ? ("") : (<span style={{ color: "#0095f6", cursor: "pointer", fontSize: 14 }} id={index} onClick={clearComment}>Post</span>)
                                        }
                                        <SlEmotsmile size={12} style={{ cursor: "pointer" }} color={colors.gray} />
                                    </div>
                                </div>
                                <div className="post-time">
                                    <p style={{ color: colors.gray, fontSize: 10 }}>15 MINUTES AGO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}