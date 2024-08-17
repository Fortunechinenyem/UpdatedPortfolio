import React from "react";
import Layout from "@/app/Components/Layout";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of a Strong Online Presence for Businesses",
    description:
      "Learn why having an online presence is crucial for modern businesses and how it can help you grow.",
    image: "/path-to-image-1.jpg",
    date: "August 2, 2024",
    author: "Jane Doe",
  },
  {
    id: 2,
    title: "Top 10 Marketing Strategies for Small Businesses",
    description:
      "Explore the best marketing strategies to help small businesses thrive in today's competitive market.",
    image: "/path-to-image-2.jpg",
    date: "July 25, 2024",
    author: "John Smith",
  },
  {
    id: 3,
    title: "Success Story: How [Business Name] Grew Using Our Platform",
    description:
      "Discover how [Business Name] leveraged our platform to expand their reach and grow their business.",
    image: "/path-to-image-3.jpg",
    date: "July 18, 2024",
    author: "Emily Johnson",
  },
];

const Blog = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Stay updated with the latest industry news, business tips, and
            success stories. Our blog is designed to provide valuable insights
            and inspiration to help your business grow and succeed.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#d0d0ac] rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full object-cover h-48"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    By {post.author} on {post.date}
                  </p>
                  <p className="text-gray-700 mb-6">{post.description}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-[#858327] font-semibold hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
