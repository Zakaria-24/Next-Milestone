import { getPosts } from "@/services/postApi"


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
        </div>
      ))
    }
        </div>
    </div>
  )
}
