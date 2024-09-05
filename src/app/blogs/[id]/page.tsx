
// interface BlogType  {
//   id: number;
//   title: string;
//   description: string;
// }

// interface BlogDetailsPageProps {
//   params: {
//     id: string; // Assuming id comes as a string from params
//   };
// }

// const blogs: BlogType[] = [
//   {
//     id: 1,
//     title: "Mastering TypeScript: A Comprehensive Guide for Beginners",
//     description: "An in-depth guide to TypeScript for those new to the language. Learn the basics, advanced features, and best practices to start building robust applications."
//   },
//   {
//     id: 2,
//     title: "The Future of Web Development: Trends to Watch in 2024",
//     description: "Explore emerging trends in web development, including new technologies, frameworks, and practices that will shape the industry in 2024 and beyond."
//   },
//   {
//     id: 3,
//     title: "How to Optimize Your React App for Performance",
//     description: "Learn techniques and strategies for optimizing the performance of your React applications, from reducing bundle size to improving rendering efficiency."
//   },
//   {
//     id: 4,
//     title: "Building Scalable APIs with Node.js and Express",
//     description: "A guide to designing and implementing scalable APIs using Node.js and Express. Discover best practices for architecture, security, and performance."
//   },
//   {
//     id: 5,
//     title: "A Beginner's Guide to GraphQL: Concepts and Use Cases",
//     description: "An introductory guide to GraphQL, covering fundamental concepts, benefits over REST, and practical use cases for implementing GraphQL in your projects."
//   },
//   {
//     id: 6,
//     title: "Designing Effective User Interfaces: Best Practices and Tips",
//     description: "Tips and best practices for designing intuitive and effective user interfaces. Learn how to create user-centric designs that enhance usability and user experience."
//   },
//   {
//     id: 7,
//     title: "Exploring the Benefits of Serverless Architecture",
//     description: "An exploration of serverless architecture, its benefits, and how it differs from traditional server-based approaches. Learn how serverless can streamline development and reduce costs."
//   },
//   {
//     id: 8,
//     title: "Top 10 CSS Frameworks to Try in 2024",
//     description: "A roundup of the top CSS frameworks to consider for your projects in 2024. Discover the features, pros, and cons of each framework to choose the best fit for your needs."
//   },
//   {
//     id: 9,
//     title: "How to Implement Continuous Integration and Continuous Deployment (CI/CD)",
//     description: "A comprehensive guide to setting up and implementing CI/CD pipelines. Learn how to automate your build, test, and deployment processes to improve development efficiency."
//   },
//   {
//     id: 10,
//     title: "Understanding DevOps: Key Principles and Practices for Success",
//     description: "An overview of DevOps principles and practices. Learn how to integrate development and operations to enhance collaboration, speed up delivery, and ensure higher quality software."
//   }
// ];

// const BlogDetailsPage: React.FC<BlogDetailsPageProps> = ({ params }) => {
//   // Convert params.id to a number for comparison
//   const blogId = parseInt(params.id);

//   // Find the blog with the matching id...... ....
//   const blog = blogs.find(blog => blog.id === blogId);

//   if (!blog) {
//     return <div>Current Blog not found</div>;
//   }

//   const { title, description } = blog;

//   return (
//     <div className="border-2 m-8 p-4">
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default BlogDetailsPage;