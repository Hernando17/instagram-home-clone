import { BsThreeDots } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

export function Post({ data }) {
    return (
        <div>
            {
                data.map((post, index) => (
                    <div key={index} className="post">
                        <div className="post-header">
                            <div className="post-user">
                                <img className="post-pp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                                <p>{post.user.username}</p>
                            </div>
                            <BsThreeDots />
                        </div>
                        <img className="post-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                        <div>
                            <FcLike style={{ color: "white" }} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}