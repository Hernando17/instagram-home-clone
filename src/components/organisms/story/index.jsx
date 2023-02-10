import { useSelector } from "react-redux";
import { Ellipsis } from "../../../utils";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { currentUser } from "../../../redux/features/userSlice";

export function Story({ data, userPost }) {
    const user = useSelector(currentUser);

    return (
        <div className="story">
            <div className="story-container">
                <div className="story-item">
                    <div className="gradient-off">
                        <img className="story-pp" src={user.pp} />
                        <div className="story-add">
                            <FontAwesomeIcon icon={faAdd} size="sm" color="white" />
                        </div>
                    </div>
                    <p className="story-username">Your story</p>
                </div>
                {
                    data.map((item, index) => (
                        <div key={index} className="story-item">
                            <div className="gradient">
                                <div className="gradient-gap">
                                    <img className="story-pp" src={userPost[index].pp} />
                                </div>
                            </div>
                            <p className="story-username">{Ellipsis({ text: item.user.username, limit: 9 })}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}