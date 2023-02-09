import Layout from '../Layout'
import { useGetAllPostQuery } from '../../redux/services/post.api'
import { AiOutlineRight } from "react-icons/ai";
import { Story } from '../../components';

export default function Home() {
    const { data, error, isLoading } = useGetAllPostQuery()

    if (isLoading) return <div>Loading...</div>


    const story = [
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Alex"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Peter"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "John"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Lewis"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Bryan"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Bryan"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Bryan"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Bryan"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Bryan"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Bryan"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Bryan"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Bryan"
        },
        {
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            username: "Bryan"
        },
    ]

    return (
        <Layout>
            <div className="home">
                <Story data={story} />
                {
                    data.record.data.map((post, index) => (
                        <div key={index} className="post">
                            <div className="post-user">
                                <img className="post-pp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                                <p>{post.user.username}</p>
                            </div>
                            <img className="post-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}