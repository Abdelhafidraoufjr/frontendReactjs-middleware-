import { useState, useEffect } from 'react';

export default function Blog() {
    const [posts, setPosts] = useState([]);          // posts venant du backend
    const [selectedPost, setSelectedPost] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const postsToShow = showAll ? posts : posts.slice(0, 3);

    useEffect(() => {
        // Remplace par l'URL de ton backend
        fetch('http://localhost:3000/api/blogs')
            .then((res) => {
                if (!res.ok) throw new Error('Erreur lors du chargement des blogs');
                return res.json();
            })
            .then((data) => setPosts(data))
            .catch((err) => {
                console.error(err);
                setPosts([]); // en cas d'erreur on vide la liste ou tu peux gérer autrement
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

            {!showAll ? (
                <div className="mt-10 text-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="mt-4 inline-block text-sm text-red-600 hover:text-red-500"
                    >
                        More Blogs <span aria-hidden="true">→</span>
                    </button>
                </div>
            ) : (
                <div className="mt-10 text-center">
                    <button
                        onClick={() => setShowAll(false)}
                        className="mt-4 inline-block text-sm text-red-600 hover:text-red-500"
                    >
                        Default Blog <span aria-hidden="true">→</span>
                    </button>
                </div>
            )}


            {/* Modale */}
            {selectedPost && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
                    onClick={() => setSelectedPost(null)}
                >
                    <div
                        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                            onClick={() => setSelectedPost(null)}
                            aria-label="Fermer la fenêtre"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-red-600">{selectedPost.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">
                            Auteur : {selectedPost.author.nom} {selectedPost.author.prenom}
                        </p>
                        <img
                            src={selectedPost.imageUrl}
                            alt={selectedPost.title}
                            className="mb-4 rounded-lg object-cover w-full max-h-64"
                        />
                        <pre className="whitespace-pre-wrap text-gray-700">{selectedPost.content}</pre>
                    </div>
                </div>
            )}
        </div>
    );
}
