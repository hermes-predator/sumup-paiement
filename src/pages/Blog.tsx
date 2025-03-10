import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <Helmet>
        <title>Blog | Articles sur les Logos de Football | Logo Foot</title>
        <meta 
          name="description" 
          content="Découvrez nos articles sur les logos de football : histoire, design, signification et évolution des emblèmes des plus grands clubs de football." 
        />
        <meta 
          property="og:title" 
          content="Blog | Articles sur les Logos de Football | Logo Foot" 
        />
        <meta 
          property="og:description" 
          content="Découvrez nos articles sur les logos de football : histoire, design, signification et évolution des emblèmes des plus grands clubs de football." 
        />
      </Helmet>
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Articles</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-purple-100/20"
          >
            <time className="text-sm text-gray-500">{post.date}</time>
            <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-3">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>
            <Link 
              to={`/blog/${post.id}`} 
              className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-1"
            >
              Lire la suite
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
