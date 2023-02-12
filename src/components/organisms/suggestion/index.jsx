import { useSelector } from "react-redux"
import { currentUser } from "../../../redux/features/userSlice"
import { userPost } from "../../../dummy";
import { Ellipsis, FollowedBy } from "../../../utils";

export function Suggestion({ data }) {
    const user = useSelector(currentUser);

    return (
        <div className="suggestion">
            <div className="suggestion-container">
                <div className="suggestion-user">
                    <div className="suggestion-data">
                        <a href="#">
                            <img className="suggestion-pp" src={user.pp} />
                        </a>
                        <div className="suggestion-detail">
                            <a href="#" className="suggestion-username">{user.username}</a>
                            <span className="suggestion-name" style={{ color: "#8e8e8e", fontSize: 14 }}>{user.fullname}</span>
                        </div>
                    </div>
                    <span className="suggestion-action">Switch</span>
                </div>
                <div className="suggestion-for-you">
                    <span style={{ color: "#8e8e8e", fontSize: 14 }}>Suggestions for you</span>
                    <span style={{ cursor: "pointer", fontSize: 12 }}>See All</span>
                </div>
                <div className="suggestion-friend">
                    {
                        data.slice(0, 5).map((item, index) => (
                            <div className="suggestion-user" key={index}>
                                <div className="suggestion-data">
                                    <a href="#">
                                        <img style={{ cursor: "pointer" }} className="suggestion-friend-pp" src={userPost[index].pp} />
                                    </a>
                                    <div className="suggestion-detail">
                                        <a href="#" className="suggestion-username">{item.user.username}</a>
                                        <span style={{ color: "#8e8e8e", fontSize: 12 }} className="suggestion-name" >
                                            {
                                                userPost[index].follower.length > 1 ? Ellipsis({ text: `Followed by ${userPost[index].follower[0]} + ${FollowedBy({ data: userPost[index].follower })} more`, limit: 33 }) : Ellipsis({ text: `Followed by ${userPost[index].follower[0]}`, limit: 30 })
                                            }

                                        </span>
                                    </div>
                                </div>
                                <span className="suggestion-action">Follow</span>
                            </div>
                        ))
                    }
                </div>
                <div className="suggestion-info">
                    <span style={{ color: "#c7c7c7", fontSize: 12 }}><a href="#">About</a> · <a href="#">Help</a> · <a href="#">Press</a> · <a href="#">API</a> · <a href="#">Jobs</a> · <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Locations</a> · <a href="#">Language</a></span>
                </div>
                <span style={{ marginTop: 24, color: "#c7c7c7", fontSize: 12 }}>© 2023 INSTAGRAM FROM META</span>
            </div>

        </div>
    )
}