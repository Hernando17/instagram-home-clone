import { StoryNextButton } from "../../atoms"

export function Story({ data }) {

    const Ellipsis = ({ text, limit }) => {
        if (text.length <= limit) {
            return <>{text}</>;
        }
        return <>{text.slice(0, limit)}...</>;
    };

    return (
        <div className="story">
            {
                data.map((item, index) => (
                    <div key={index} className="story-item">
                        <div className="gradient">
                            <img className="story-pp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                        </div>
                        <p>{Ellipsis({ text: item.user.username, limit: 9 })}</p>
                    </div>
                ))
            }
        </div>
    )
}