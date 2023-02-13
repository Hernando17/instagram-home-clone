import { useState, useEffect } from "react";
import { Ellipsis } from "../../../utils";
import { SlEmotsmile } from "react-icons/sl";
import { colors } from "../../../themes";
import { InputComment, PostReact, PostHeader } from "../../../components";

export function Post({ data, userPost }) {
    const [detail, setDetail] = useState([]);
    const [postComment, setPostComment] = useState([]);
    const [like, setLike] = useState([]);
    const [save, setSave] = useState([]);

    const savePost = (e) => {
        e.preventDefault();
        setSave({
            ...save,
            [Number(e.target.id)]: true
        });
    };

    const unsavePost = (e) => {
        e.preventDefault();
        setSave({
            ...save,
            [Number(e.target.id)]: false
        });
    };

    const likePost = (e) => {
        e.preventDefault();
        setLike({
            ...like,
            [Number(e.target.id)]: true
        });
    };

    const dislikePost = (e) => {
        e.preventDefault();
        setLike({
            ...like,
            [Number(e.target.id)]: false
        });
    };

    const openDetail = (e) => {
        e.preventDefault();
        setDetail({
            ...detail,
            [e.target.id]: {
                id: e.target.id
            }
        });
    }

    const setComment = (e) => {
        e.preventDefault();
        setPostComment({
            ...postComment,
            [e.target.id]: e.target.value,
        });
    }

    const clearComment = (e) => {
        e.preventDefault();
        setPostComment({
            ...postComment,
            [e.target.id]: ""
        });
    }

    return (
        <div className="post">
            {
                data.map((post, index) => (
                    <div key={index} className="post-container">
                        <PostHeader user={userPost[index]} post={post} />
                        <img className="post-image" src={userPost[index].post} />
                        <div className="post-action">
                            <div className="post-action-container">
                                <PostReact index={index} likeAction={likePost} dislikeAction={dislikePost} isLiked={like[index]} isSave={save[index]} savePost={savePost} unsavePost={unsavePost} />
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
                                        <SlEmotsmile size={12} className="post-comment-emot" />
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