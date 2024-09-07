
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
const PostDetailsPage: React.FC<PostDetailsPageProps> = async ({ params }) => {
    const { title, body } = await getDetails(params.id);

    return (
        <div>
            <h1>Post Details Page</h1>
            <div className="border-2 p-4 mt-4 bg-lime-50">
                <h3>Title: {title}</h3>
                <p>Description: {body}</p>
            </div>
        </div>
    );
};

export default PostDetailsPage;
