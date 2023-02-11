import * as React from 'react';
import { useSelector } from "react-redux";
import { Ellipsis } from "../../../utils";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { currentUser } from "../../../redux/features/userSlice";
import {
    SnapList,
    SnapItem,
    useVisibleElements,
    useScroll,
} from 'react-snaplist-carousel';

export function Story({ data, userPost }) {
    const user = useSelector(currentUser);

    return (
        <div className="story">
            <div className="story-container">
                <SnapList className="story-list">
                    <SnapItem snapAlign="center" className="story-item-upload">
                        <div>
                            <div className="gradient-off">
                                <img className="story-pp" src={user.pp} />
                                <div className="story-add">
                                    <FontAwesomeIcon icon={faAdd} size="sm" color="white" />
                                </div>
                            </div>
                            <p className="story-username">Your story</p>
                        </div>
                    </SnapItem>
                    {
                        data.map((item, index) => (
                            <SnapItem snapAlign="center" key={index}  >
                                <div className="story-item" >
                                    <div className="gradient">
                                        <div className="gradient-gap">
                                            <img className="story-pp" src={userPost[index].pp} />
                                        </div>
                                    </div>
                                    <p className="story-username">{Ellipsis({ text: item.user.username, limit: 9 })}</p>
                                </div>
                            </SnapItem>
                        ))
                    }
                </SnapList>
            </div>
        </div>
    )
}