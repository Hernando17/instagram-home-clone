export function StoryActive({ image }) {
    return (
        <div className="gradient">
            <div className="gradient-gap">
                <img className="story-pp" src={image.pp} />
            </div>
        </div>
    )
}