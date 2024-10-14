import React from 'react';
import {Link} from 'react-router-dom';

const name="paveen";
const blogPosts = [
  {
    title: "10 Easy Breakfast Recipes for Busy Mornings",
    author: "Jane Doe",
    date: "October 5, 2024",
    image: "https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/65c3ce009cf6b1a6c97e7824_Breakfast%20Blog%20Cover-p-800.jpg", // Replace with actual image URL
    description:
      "Start your day off right with these easy and quick breakfast recipes that are perfect for busy mornings. From smoothies to pancakes, we’ve got you covered!",
      Link:"/blogs/10-Easy-breakfast"
    },
    {
      title: "The Ultimate Guide to Baking Perfect Cookies",
      author: "John Smith",
      date: "September 28, 2024",
      image: "https://i0.wp.com/wellingtonbakehouse.com/wp-content/uploads/2014/09/stack-final.jpg?resize=708%2C472&ssl=1", // Replace with actual image URL
      description:
      "Learn how to bake the perfect cookies every time with this step-by-step guide. Tips and tricks included for chewy, crispy, or soft cookies.",
      Link:"/blogs/The-Ultimate-Guide-to-Baking-Perfect-Cookies"
    },
    {
      title: "Healthy Dinner Recipes Under 30 Minutes",
      author: "Emily Johnson",
      date: "September 21, 2024",
      image: "https://laurenzcollins.com/uploads/2023/07/what-are-some-interesting-indian-dinner-recipes-i-can-try.webp", // Replace with actual image URL
      description:
      "Discover a collection of healthy dinner recipes that are not only nutritious but can be prepared in under 30 minutes. Perfect for weeknight meals!",
      Link:"/blogs/Healthy-Dinner-Recipes-Under-30-Minutes"
      
    },
  // Add more blog posts here...
];

const BlogCard = ({ post }) => (
  
  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-6 w-full">
    {/* Image */}
    <div className="md:w-1/3 w-full">
      <img className="w-full h-48 md:h-auto object-cover" src={post.image} alt={post.title} />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between p-4 md:w-2/3">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-2">By {post.author} | {post.date}</p>
        <p className="text-gray-700 mb-4">{post.description}</p>
      </div>
      <Link to={post.Link} 
      className='self-start md:self-end'>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 " >
       Read More
      </button>
      </Link>
    </div>
  </div>
);

const BlogPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Recipe Blog</h1>

      {/* Blog Posts - Flex Layout */}
      <div className="flex flex-col space-y-6">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
