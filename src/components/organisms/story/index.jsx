import * as React from 'react';
import { useSelector } from "react-redux";

import { currentUser } from "../../../redux/features/userSlice";
import {
    SnapList,
    SnapItem,
} from 'react-snaplist-carousel';
import { StoryUser, StoryFollowing } from '../../molecules';

export function Story({ data, userPost }) {
    const user = useSelector(currentUser);

    return (
        <div className="story">
            <div className="story-container">
                <SnapList className="story-list">
                    <SnapItem snapAlign="center" className="story-item-upload">
                        <StoryUser user={user} />
                    </SnapItem>
                    {
                        data.map((item, index) => (
                            <SnapItem snapAlign="center" key={index}  >
                                <StoryFollowing dummy={userPost} index={index} user={item} />
                            </SnapItem>
                        ))
                    }
                </SnapList>
            </div>
        </div>
    )
}