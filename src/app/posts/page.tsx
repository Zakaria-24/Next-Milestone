import { getPosts } from "@/services/postApi"
import Link from "next/link"


export default async function PostsPage() {

    const postsData = await getPosts()

  return (
    <div>
        <h1>All posts</h1>
        <div className='grid grid-cols-3 p-3 gap-6'>
        {
        postsData?.map(({id, title, body}) => (
        <div key={id} className='border-2 p-6' >
            <h1>{id}</h1>
            <h1>{title}</h1>
            <p>{body}</p>
            <button className="mt-4"><Link href={`posts/${id}`} className="text-lg font-semibold p-2 rounded-lg bg-lime-600">View Details</Link></button>
        </div>
      ))
    }
        </div>
    </div>
  )
}
