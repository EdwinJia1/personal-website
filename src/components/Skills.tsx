'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SkillCategory = {
  title: string;
  items: string[];
};

const categories: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'MySQL'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Vercel', 'Waline', 'Firebase', 'Node.js'],
  },
  {
    title: 'Tools',
    items: ['Cursor', 'Git', 'Docker', 'Postman', 'ESLint/Prettier', 'Jest'],
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600">{cat.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-700 hover:bg-teal-100 transition-colors cursor-default">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center text-gray-600 mt-12 text-sm max-w-2xl mx-auto"
          variants={item}
        >
          Also exploring AI workflows and automation (Claude MCP, Notion/Google APIs) to enhance productivity and create intelligent systems.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Skills;

