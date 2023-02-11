import { useSelector } from "react-redux"
import { currentUser } from "../../../redux/features/userSlice"
import { userPost } from "../../../dummy";
import { FollowedBy } from "../../../utils";

export function Suggestion({ data }) {
    const user = useSelector(currentUser);

    return (
        <div className="suggestion">
            <div className="suggestion-container">
                <div className="suggestion-user">
                    <div className="suggestion-data">
                        <img className="suggestion-pp" src={user.pp} />
                        <div className="suggestion-detail">
                            <span className="suggestion-username">{user.username}</span>
                            <span className="suggestion-name" style={{ color: "#8e8e8e", fontSize: 14 }}>{user.fullname}</span>
                        </div>
                    </div>
                    <span style={{ color: "#0095f6", cursor: "pointer", fontSize: 12 }}>Switch</span>
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
                                    <img style={{ cursor: "pointer" }} className="suggestion-friend-pp" src={userPost[index].pp} />
                                    <div className="suggestion-detail">
                                        <span style={{ cursor: "pointer", fontSize: 14 }} className="suggestion-username">{item.user.username}</span>
                                        <span style={{ color: "#8e8e8e", cursor: "pointer", fontSize: 12 }} className="suggestion-name" >Followed by {userPost[index].follower[0]} + {FollowedBy({ data: userPost[index].follower })} more</span>
                                    </div>
                                </div>
                                <span style={{ color: "#0095f6", cursor: "pointer", fontSize: 12 }}>Follow</span>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}