import Layout from '../Layout'
import { useGetAllPostQuery } from '../../redux/services/post.api'
import { AiOutlineRight } from "react-icons/ai";
import { Story, Post } from '../../components';

export default function Home() {
    const { data, error, isLoading } = useGetAllPostQuery()

    if (isLoading) return <div>Loading...</div>

    return (
        <Layout>
            <div className="home">
                <Story data={data.record.data} />
                <Post data={data.record.data} />
            </div>
        </Layout>
    )
}