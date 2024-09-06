interface Post {
    id: number;
    title: string;
    body: string;
  }
export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const getPosts: Post[] = await res.json()
//   console.log(getPosts)
return getPosts
}