"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Web Development: AI and No-Code Solutions",
    description: "Exploring how artificial intelligence and no-code platforms are revolutionizing web development and what it means for developers.",
    date: "April 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070"
    }
  },
  {
    title: "Mastering Modern UI Design Principles",
    description: "A deep dive into contemporary UI design principles and how to implement them effectively in your projects.",
    date: "April 12, 2024",
    readTime: "7 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    author: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070"
    }
  },
  {
    title: "Building Scalable Applications with Next.js",
    description: "Learn how to leverage Next.js features to build performant and scalable web applications.",
    date: "April 10, 2024",
    readTime: "6 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    author: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070"
    }
  }
];



export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">
            My Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Thoughts, learnings, and insights from my journey in tech
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-sm">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center text-primary hover:text-primary/80 transition-colors cursor-pointer">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Read More</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}