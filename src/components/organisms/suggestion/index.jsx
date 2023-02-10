import { useSelector } from "react-redux"
import { currentUser } from "../../../redux/features/userSlice"

export function Suggestion() {
    const user = useSelector(currentUser);

    return (
        <div className="suggestion">
            <div className="suggestion-container">
                <div className="suggestion-user">
                    <img className="suggestion-pp" src={user.pp} />
                    <span>{user.username}</span>
                </div>
            </div>
        </div>
    )
}