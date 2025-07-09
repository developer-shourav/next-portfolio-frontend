import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(), 
  }));
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = (await params).id; 
  const post = blogPosts.find((post) => post.id == postId);

  if (!post) {
    return notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 mb-6">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm px-3 py-1 bg-accent text-accent-foreground rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-muted-foreground">
            Published on {post.date}
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {post.content
          .split(/\n\n|(?:^|\n)(?:- |\d+\.\s|• )/)
          .filter((paragraph) => paragraph.trim() !== "")
          .map((paragraph, i) => (
            <p key={i} className="mb-6 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
      </div>

      <div className="mt-12 pt-8 border-t">
        <Button asChild variant="ghost">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            View all articles
          </Link>
        </Button>
      </div>
    </article>
  );
}
