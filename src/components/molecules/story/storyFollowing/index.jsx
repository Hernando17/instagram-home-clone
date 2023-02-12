import { Ellipsis } from "../../../../utils";
import { StoryActive } from "../../..";

export function StoryFollowing({ user, dummy, index }) {
    return (
        <div className="story-item">
            <StoryActive image={dummy[index]} />
            <span className="story-username">{Ellipsis({ text: user.user.username, limit: 9 })}</span>
        </div>
    )
}