import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function BlogPage() {
  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Latest Articles"
          subtitle="From my blog"
          centered={true}
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow"
            >
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
                <Button asChild variant="link" className="px-0">
                  <Link href={`/blog/${post.id}`}>
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
