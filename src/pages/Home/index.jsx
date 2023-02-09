import Layout from '../Layout'
import { useGetAllPostQuery } from '../../redux/services/post.api'
import { AiOutlineRight } from "react-icons/ai";
import { Story, Post, LoadingInstagram } from '../../components';

export default function Home() {
    const { data, error, isLoading } = useGetAllPostQuery()

    const userPost = [
        {
            pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
            post: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
        },
        {
            pp: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            post: "https://www.cadillac.com/content/dam/cadillac/na/us/english/ux/homepage-foundation/new/22-homepage-masthead-celestiq-reveal-24cacl50051-l-v2.jpg?imwidth=960"
        },
        {
            pp: "https://awsimages.detik.net.id/community/media/visual/2017/07/21/654df7f4-3ace-4998-8d54-ffcbfd27508c_169.jpg?w=700&q=90",
            post: "https://www.diykamera.com/wp-content/uploads/2017/07/cara-memotret-pemandangan.jpg"
        },
        {
            pp: "https://cdn-1.motorsport.com/images/amp/Y99mndAY/s6/lewis-hamilton-mercedes-amg-an.jpg",
            post: "https://asset.kompas.com/crops/mIqPgJPPIuHZvTtjk6CLdEK1Wmo=/135x136:954x682/750x500/data/photo/2021/06/07/60bd809e08d2a.jpg"
        },
        {
            pp: "https://img.okezone.com/content/2022/11/06/51/2701878/penyebab-lionel-messi-bisa-absen-bela-timnas-argentina-di-piala-dunia-2022-KEWF8ZGwCK.JPG",
            post: "https://digitalhub.fifa.com/transform/b817ecc7-f044-45b8-8f67-a084a5d10e39/Argentina-v-France-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:868,width:1536&quality=100"
        }
    ]

    if (isLoading) return <LoadingInstagram />
    return (
        <Layout>
            <div className="home">
                <div className="home-container">
                    <Story data={data.record.data} userPost={userPost} />
                    <Post data={data.record.data} userPost={userPost} />
                </div>
                <div className="suggestion">
                    <h2>test</h2>
                </div>
            </div>
        </Layout>
    )
}