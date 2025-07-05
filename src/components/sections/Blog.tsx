import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Blog = () => {
  const blogPosts = [
    {
      title: 'Optimizing Next.js Applications for Performance',
      excerpt: 'Learn how to improve your Next.js app loading times and user experience.',
      date: 'May 15, 2024',
      category: 'Next.js',
    },
    {
      title: 'State Management in React: A Comprehensive Guide',
      excerpt: 'Comparing different state management solutions for React applications.',
      date: 'April 2, 2024',
      category: 'React',
    },
    {
      title: 'Building Accessible Web Applications',
      excerpt: 'Essential techniques for creating web apps that everyone can use.',
      date: 'March 10, 2024',
      category: 'Accessibility',
    },
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Latest Articles"
          subtitle="From my blog"
          centered={true}
        />
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">
                {post.title} Image
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Button variant="link" className="px-0">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <a href="#">
              View All Articles
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};