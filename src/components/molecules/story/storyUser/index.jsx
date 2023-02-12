import { Fragment } from "react"
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function StoryUser({ user }) {
    return (
        <Fragment>
            <div className="gradient-off">
                <img className="story-pp" src={user.pp} />
                <div className="story-add">
                    <FontAwesomeIcon icon={faAdd} size="sm" color="white" />
                </div>
            </div>
            <p className="story-username">Your story</p>
        </Fragment>
    )
}