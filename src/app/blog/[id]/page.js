export default async function BlogDetailPage({ params }) {
  const { id } = params; // Dinamik id'yi alıyoruz

  // JSON dosyasını fetch ile okuyoruz
  const res = await fetch("http://localhost:3000/blogPosts.json", {
    cache: "no-store",
  });
  const blogPosts = await res.json(); // JSON'u parse ediyoruz

  // İlgili blog yazısını id'ye göre buluyoruz
  const post = blogPosts.find((p) => p.id === parseInt(id));

  // Eğer yazı bulunamazsa hata mesajı gösteriyoruz
  if (!post) {
    return <h1>Blog Yazısı Bulunamadı</h1>;
  }

  return (
    <main>
      <div className="my-5">
        {/* Blog başlığı */}
        <h1 className="text-center font-bold text-2xl">{post.title}</h1>

        <div className="my-5">
          {/* Blog içeriği */}
          <p className="text-center font-mono">{post.content}</p>
        </div>

        <div className="w-52">
          {/* Blog yazarı ve tarihi */}
          <div className="flex justify-between">
            <p className="text-center font-mono">Yazar:</p>{" "}
            <p className="text-center font-mono">{post.author}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-center font-mono">Yayın Tarihi:</p>{" "}
            <p className="text-center font-mono">{post.date}</p>
          </div>
        </div>

        <div className="my-6">
          {/* Ana sayfaya dönmek için bir link */}
          <a className="bg-slate-300 font-semibold p-3 my-2 rounded-md hover:bg-slate-500 hover:shadow-lg transition-all duration-300 ease-in-out" href="/">Ana Sayfaya Dön</a>
        </div>
      </div>
    </main>
  );
}
