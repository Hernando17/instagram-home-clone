import { BsThreeDots } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons'



export function Post({ data }) {
    return (
        <div className="post">
            {
                data.map((post, index) => (
                    <div key={index} className="post-container">
                        <div className="post-header">
                            <div className="post-user">
                                <img className="post-pp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                                <p>{post.user.username}</p>
                            </div>
                            <BsThreeDots />
                        </div>
                        <img className="post-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                        <div className="post-action">
                            <div className="post-react">
                                <FontAwesomeIcon icon={faHeart} size="xl" />
                                <FontAwesomeIcon icon={faComment} size="xl" />
                                <FontAwesomeIcon icon={faPaperPlane} size="xl" />
                            </div>
                            <FontAwesomeIcon icon={faBookmark} size="xl" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}