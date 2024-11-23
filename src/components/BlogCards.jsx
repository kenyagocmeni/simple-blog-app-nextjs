import React from "react";
import Link from "next/link";

const BlogCards = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {posts.map((post, i) => (
        <div key={i} className="p-4 border rounded shadow-sm flex flex-col justify-between bg-slate-50 hover:shadow-2xl transition-all duration-700 ease-in-out">
          <div>
            <h2 className="font-mono border-b-2 pb-3">{post.title}</h2>
            <div>
              <p className="font-mono">Yazar: {post.author}</p>
              <p>Tarih: {post.date}</p>
            </div>
          </div>
          <Link href={`/blog/${post.id}`}>
            <button className="bg-slate-300 font-semibold p-3 my-2 rounded-md hover:bg-slate-500 hover:shadow-lg transition-all duration-300 ease-in-out">Yazıyı Oku</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
