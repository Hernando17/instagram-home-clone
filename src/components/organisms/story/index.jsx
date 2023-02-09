import { StoryNextButton } from "../../atoms"

export function Story({ data }) {
    return (
        <div className="story">
            {
                data.map((item, index) => (
                    <div key={index} className="story-item">
                        <img className="story-pp" src={item.image} />
                        <p>{item.username}</p>
                    </div>
                ))
            }
            <StoryNextButton />
        </div>
    )
}