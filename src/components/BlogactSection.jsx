import { useState, useEffect } from 'react';
import BlogDetail from '../pages/BlogDetail'; 

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const postsToShow = showAll ? posts : posts.slice(0, 3);

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur lors du chargement des blogs');
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error(err);
        setPosts([]);
      });
  }, []);

  return (
    <div className="bg-white py-16 px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl">
          Derniers Blog Publier
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Découvrez nos derniers articles sur les recettes naturelles, les astuces bien-être et un mode de vie sain.
        </p>
        <p className="soustitre mt-4 text-lg leading-8 text-gray-600">
          اكتشف أحدث مقالاتنا حول الوصفات الطبيعية، ونصائح العناية بالصحة، ونمط الحياة الصحي.
        </p>
      </div>

      <div className="mt-20 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:max-w-none lg:grid-cols-3">
        {postsToShow.map((post) => (
          <article key={post.id} className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">{post.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{post.description}</p>
              <button
                onClick={() => setSelectedPost(post)}
                className="mt-4 inline-block text-sm font-medium text-red-600 hover:text-red-500"
              >
                Lire l’article →
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 inline-block text-sm text-red-600 hover:text-red-500"
        >
          {showAll ? "Réduire les blogs" : "Voir plus de blogs"} <span aria-hidden="true">→</span>
        </button>
      </div>

      {selectedPost && (
        <BlogDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}
