import { FC } from 'react';
import Link from "next/link";

// Define the type for the post data
interface PostData {
    title: string;
    body: string;
}

// Define the type for the params prop
interface Params {
    id: string; // id will be a string
}

// Define the type for the component props
interface PostDetailsPageProps {
    params: Params;
}

// Function to fetch post details
const getDetails = async (id: string): Promise<PostData> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

// Define the component with TypeScript
const PostDetailsPage: FC<PostDetailsPageProps> = async ({ params }) => {
    const { title, body } = await getDetails(params.id);

    return (
        <div>
            <h1>Post Details Page</h1>
            <div className="border-2 p-4 mt-4 bg-lime-50">
                <h3>Title: {title}</h3>
                <p>Description: {body}</p>
                <button className="mt-4"><Link href='/posts' className="text-lg font-semibold p-2 rounded-lg bg-lime-600">Back page</Link></button>
            </div>
        </div>
    );
};

export default PostDetailsPage;
