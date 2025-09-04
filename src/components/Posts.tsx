'use client';

import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: "Building AI-Powered Personal Assistants",
    excerpt: "Exploring Claude MCP servers and how they can revolutionize personal productivity workflows...",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["AI", "Productivity", "Claude"]
  },
  {
    title: "From Startup to Student: My Entrepreneurial Journey",
    excerpt: "Lessons learned from founding a startup at 18 and transitioning to university life...",
    date: "2024-02-28",
    readTime: "8 min read",
    tags: ["Entrepreneurship", "Personal"]
  },
  {
    title: "Next.js 15 and the Future of React Development",
    excerpt: "Deep dive into the latest features and how they improve developer experience...",
    date: "2024-02-10",
    readTime: "6 min read",
    tags: ["React", "Next.js", "Web Dev"]
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Posts = () => {
  return (
    <section id="posts" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-12 text-center"
            variants={item}
          >
            Recent Posts
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                variants={item}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            variants={item}
          >
            <a
              href="#blog"
              className="inline-flex items-center px-6 py-3 border border-teal-500 text-teal-600 font-semibold rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Posts;