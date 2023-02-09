import { Ellipsis } from "../../../utils";

export function Story({ data }) {
    return (
        <div className="story">
            <div className="story-container">
                {
                    data.map((item, index) => (
                        <div key={index} className="story-item">
                            <div className="gradient">
                                <img className="story-pp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                            </div>
                            <p className="story-username">{Ellipsis({ text: item.user.username, limit: 9 })}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}