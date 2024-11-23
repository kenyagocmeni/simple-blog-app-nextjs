import BlogCards from "@components/components/BlogCards";

export default async function HomePage() {
  // JSON dosyasını fetch ile okuyoruz
  const res = await fetch('http://localhost:3000/blogPosts.json', { cache: 'no-store' });
  const blogPosts = await res.json(); // JSON'u parse edip bir diziye dönüştürüyoruz

  return (
    <main>
      {/* Sayfa başlığı */}
      <h1 className="font-extrabold text-center my-6">Blog Yazıları</h1>
      
      {/* Blog başlıklarını listeleme */}
      <BlogCards posts={blogPosts}/>
    </main>
  );
}
