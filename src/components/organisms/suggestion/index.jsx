import { useSelector } from "react-redux"
import { currentUser } from "../../../redux/features/userSlice"

export function Suggestion() {
    const user = useSelector(currentUser);

    return (
        <div className="suggestion">
            <div className="suggestion-container">
                <div className="suggestion-user">
                    <div className="suggestion-data">
                        <img className="suggestion-pp" src={user.pp} />
                        <div className="suggestion-detail">
                            <span className="suggestion-username">{user.username}</span>
                            <span className="suggestion-name" style={{ color: "#8e8e8e" }}>{user.fullname}</span>
                        </div>
                    </div>
                    <span style={{ color: "#0095f6" }}>Switch</span>
                </div>
                <div className="suggestion-for-you">
                    <span style={{ color: "#8e8e8e" }}>Suggestions for you</span>
                    <span style={{ cursor: "pointer" }}>See All</span>
                </div>
            </div>

        </div>
    )
}