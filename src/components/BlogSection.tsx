
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Generative AI in Enterprise Applications",
    excerpt: "Explore how generative AI is transforming business operations and opening new possibilities for innovation across industries.",
    author: "Dr. Sarah Johnson",
    date: "June 15, 2023",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Implementing Computer Vision for Quality Control: A Case Study",
    excerpt: "Learn how manufacturing companies are leveraging computer vision AI to improve quality control processes and reduce defects.",
    author: "Michael Chen",
    date: "May 23, 2023",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Ethical Considerations in AI Development",
    excerpt: "An in-depth look at the ethical challenges and responsibilities that come with developing advanced AI systems.",
    author: "Emily Rodriguez",
    date: "April 10, 2023",
    category: "AI Ethics",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    readTime: "10 min read"
  }
];

const BlogSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" id="blog">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-48 md:w-80 h-48 md:h-80 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
          <div className="max-w-2xl">
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 inline-block mb-4">
              AI Resources
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Explore AI Knowledge Hub
            </h2>
            <p className="text-white/70 text-sm md:text-base">
              Dive into our collection of articles, guides, and resources to better understand how AI can transform your business operations.
            </p>
          </div>
          
          <Link to="/blog" className="mt-6 md:mt-0 btn-outline inline-flex items-center justify-center text-sm md:text-base">
            View All Resources
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl overflow-hidden h-full hover:scale-[1.02] transition-transform"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="h-40 sm:h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center text-white/60 text-xs space-x-4 mb-3">
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <User size={12} className="mr-1" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-medium text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/70 text-xs sm:text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-xs">{post.readTime}</span>
                    <span className="text-neon-blue text-sm font-medium flex items-center">
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
