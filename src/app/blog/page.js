import Link from "next/link";
import { PenLine } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "Articles by Monaim Mukul on frontend development, React and Next.js.",
};

// Add real posts here, e.g. { title, description, date, readTime, href }
const blogPosts = [];

export default function BlogPage() {
  return (
    <section className="min-h-[70vh] section-bg py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
          Blog
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          Notes and lessons from building for the web.
        </p>

        {blogPosts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-black/40 p-10">
            <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
              <PenLine className="h-8 w-8 text-primary" />
            </span>
            <h2 className="text-2xl font-bold text-white mb-3">First posts coming soon</h2>
            <p className="text-gray-400 mb-8">
              I'm writing about React, Next.js and the things I learn while
              shipping projects. Check back soon.
            </p>
            <Link
              href="/#project"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              See my projects
            </Link>
          </div>
        ) : (
          <ul className="space-y-6 text-left">
            {blogPosts.map((post) => (
              <li key={post.href}>
                <Link
                  href={post.href}
                  className="block rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-primary/50 transition-colors"
                >
                  <p className="text-sm text-gray-500 mb-2">
                    {post.date} · {post.readTime}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                  <p className="text-gray-400">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
