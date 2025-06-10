import { useState } from 'react';

const posts = [
    {
        id: 1,
        title: '5 recettes naturelles pour une peau éclatante',
        description:
            'Découvrez des recettes simples et efficaces à base d’ingrédients naturels pour prendre soin de votre peau au quotidien.',
        imageUrl: 'https://www.madame-dentelle.fr/wp-content/uploads/6541c25c48beb.jpg',
        author: 'Fatima Benali',
        content: `Prendre soin de sa peau avec des ingrédients naturels est à la portée de tous. Voici cinq recettes simples à réaliser chez vous :\n
    1. Masque au miel et citron pour illuminer le teint.\n
    2. Gommage au sucre et huile d'olive pour exfolier en douceur.\n
    3. Lotion à la camomille pour apaiser la peau.\n
    4. Baume réparateur à la cire d'abeille.\n
    5. Hydratant naturel à l'aloe vera.\n
    N’hésitez pas à tester ces recettes et à partager vos résultats !`,
    },
    {
        id: 2,
        title: 'Les bienfaits des plantes médicinales',
        description:
            'Un guide pratique sur les plantes médicinales les plus utilisées et comment les intégrer dans votre routine bien-être.',
        imageUrl: 'https://wallpapercave.com/wp/wp7716416.jpg',
        author: 'Omar El Khatib',
        content: `Les plantes médicinales jouent un rôle essentiel dans la santé naturelle. Parmi les plus populaires :\n
    - La camomille : pour calmer les inflammations.\n
    - La menthe poivrée : pour faciliter la digestion.\n
    - Le thym : antiseptique naturel.\n
    Intégrez ces plantes dans vos infusions quotidiennes pour un bien-être optimal.`,
    },
    {
        id: 3,
        title: 'Routine bien-être : 7 gestes simples pour mieux vivre',
        description:
            'Adoptez une routine bien-être naturelle avec des gestes quotidiens faciles à mettre en place pour améliorer votre santé et votre humeur.',
        imageUrl: 'https://www.spiriteo.com/blog/wp-content/uploads/2023/04/soin-energetique.jpeg',
        author: 'Layla Hassan',
        content: `Voici 7 gestes simples pour une routine bien-être efficace :\n
    1. Méditation quotidienne de 10 minutes.\n
    2. Hydratation régulière avec de l'eau infusée aux fruits.\n
    3. Activité physique adaptée.\n
    4. Sommeil de qualité.\n
    5. Alimentation saine et équilibrée.\n
    6. Pratique du yoga ou étirements.\n
    7. Moments de détente sans écrans.\n
    Adoptez ces habitudes et observez la transformation de votre corps et esprit.`,
    },
    {
        id: 4,
        title: '5 recettes naturelles pour une peau éclatante',
        description:
            'Découvrez des recettes simples et efficaces à base d’ingrédients naturels pour prendre soin de votre peau au quotidien.',
        imageUrl: 'https://www.madame-dentelle.fr/wp-content/uploads/6541c25c48beb.jpg',
        author: 'Fatima Benali',
        content: `Prendre soin de sa peau avec des ingrédients naturels est à la portée de tous. Voici cinq recettes simples à réaliser chez vous :\n
    1. Masque au miel et citron pour illuminer le teint.\n
    2. Gommage au sucre et huile d'olive pour exfolier en douceur.\n
    3. Lotion à la camomille pour apaiser la peau.\n
    4. Baume réparateur à la cire d'abeille.\n
    5. Hydratant naturel à l'aloe vera.\n
    N’hésitez pas à tester ces recettes et à partager vos résultats !`,
    },
    {
        id: 5,
        title: 'Les bienfaits des plantes médicinales',
        description:
            'Un guide pratique sur les plantes médicinales les plus utilisées et comment les intégrer dans votre routine bien-être.',
        imageUrl: 'https://wallpapercave.com/wp/wp7716416.jpg',
        author: 'Omar El Khatib',
        content: `Les plantes médicinales jouent un rôle essentiel dans la santé naturelle. Parmi les plus populaires :\n
    - La camomille : pour calmer les inflammations.\n
    - La menthe poivrée : pour faciliter la digestion.\n
    - Le thym : antiseptique naturel.\n
    Intégrez ces plantes dans vos infusions quotidiennes pour un bien-être optimal.`,
    },
    {
        id: 6,
        title: 'Routine bien-être : 7 gestes simples pour mieux vivre',
        description:
            'Adoptez une routine bien-être naturelle avec des gestes quotidiens faciles à mettre en place pour améliorer votre santé et votre humeur.',
        imageUrl: 'https://www.spiriteo.com/blog/wp-content/uploads/2023/04/soin-energetique.jpeg',
        author: 'Layla Hassan',
        content: `Voici 7 gestes simples pour une routine bien-être efficace :\n
    1. Méditation quotidienne de 10 minutes.\n
    2. Hydratation régulière avec de l'eau infusée aux fruits.\n
    3. Activité physique adaptée.\n
    4. Sommeil de qualité.\n
    5. Alimentation saine et équilibrée.\n
    6. Pratique du yoga ou étirements.\n
    7. Moments de détente sans écrans.\n
    Adoptez ces habitudes et observez la transformation de votre corps et esprit.`,
    },
        {
        id: 7,
        title: '5 recettes naturelles pour une peau éclatante',
        description:
            'Découvrez des recettes simples et efficaces à base d’ingrédients naturels pour prendre soin de votre peau au quotidien.',
        imageUrl: 'https://www.madame-dentelle.fr/wp-content/uploads/6541c25c48beb.jpg',
        author: 'Fatima Benali',
        content: `Prendre soin de sa peau avec des ingrédients naturels est à la portée de tous. Voici cinq recettes simples à réaliser chez vous :\n
    1. Masque au miel et citron pour illuminer le teint.\n
    2. Gommage au sucre et huile d'olive pour exfolier en douceur.\n
    3. Lotion à la camomille pour apaiser la peau.\n
    4. Baume réparateur à la cire d'abeille.\n
    5. Hydratant naturel à l'aloe vera.\n
    N’hésitez pas à tester ces recettes et à partager vos résultats !`,
    },
    {
        id: 8,
        title: 'Les bienfaits des plantes médicinales',
        description:
            'Un guide pratique sur les plantes médicinales les plus utilisées et comment les intégrer dans votre routine bien-être.',
        imageUrl: 'https://wallpapercave.com/wp/wp7716416.jpg',
        author: 'Omar El Khatib',
        content: `Les plantes médicinales jouent un rôle essentiel dans la santé naturelle. Parmi les plus populaires :\n
    - La camomille : pour calmer les inflammations.\n
    - La menthe poivrée : pour faciliter la digestion.\n
    - Le thym : antiseptique naturel.\n
    Intégrez ces plantes dans vos infusions quotidiennes pour un bien-être optimal.`,
    },
    {
        id: 9,
        title: 'Routine bien-être : 7 gestes simples pour mieux vivre',
        description:
            'Adoptez une routine bien-être naturelle avec des gestes quotidiens faciles à mettre en place pour améliorer votre santé et votre humeur.',
        imageUrl: 'https://www.spiriteo.com/blog/wp-content/uploads/2023/04/soin-energetique.jpeg',
        author: 'Layla Hassan',
        content: `Voici 7 gestes simples pour une routine bien-être efficace :\n
    1. Méditation quotidienne de 10 minutes.\n
    2. Hydratation régulière avec de l'eau infusée aux fruits.\n
    3. Activité physique adaptée.\n
    4. Sommeil de qualité.\n
    5. Alimentation saine et équilibrée.\n
    6. Pratique du yoga ou étirements.\n
    7. Moments de détente sans écrans.\n
    Adoptez ces habitudes et observez la transformation de votre corps et esprit.`,
    },
    {
        id: 10,
        title: '5 recettes naturelles pour une peau éclatante',
        description:
            'Découvrez des recettes simples et efficaces à base d’ingrédients naturels pour prendre soin de votre peau au quotidien.',
        imageUrl: 'https://www.madame-dentelle.fr/wp-content/uploads/6541c25c48beb.jpg',
        author: 'Fatima Benali',
        content: `Prendre soin de sa peau avec des ingrédients naturels est à la portée de tous. Voici cinq recettes simples à réaliser chez vous :\n
    1. Masque au miel et citron pour illuminer le teint.\n
    2. Gommage au sucre et huile d'olive pour exfolier en douceur.\n
    3. Lotion à la camomille pour apaiser la peau.\n
    4. Baume réparateur à la cire d'abeille.\n
    5. Hydratant naturel à l'aloe vera.\n
    N’hésitez pas à tester ces recettes et à partager vos résultats !`,
    },
    {
        id: 11,
        title: 'Les bienfaits des plantes médicinales',
        description:
            'Un guide pratique sur les plantes médicinales les plus utilisées et comment les intégrer dans votre routine bien-être.',
        imageUrl: 'https://wallpapercave.com/wp/wp7716416.jpg',
        author: 'Omar El Khatib',
        content: `Les plantes médicinales jouent un rôle essentiel dans la santé naturelle. Parmi les plus populaires :\n
    - La camomille : pour calmer les inflammations.\n
    - La menthe poivrée : pour faciliter la digestion.\n
    - Le thym : antiseptique naturel.\n
    Intégrez ces plantes dans vos infusions quotidiennes pour un bien-être optimal.`,
    },
    {
        id: 12,
        title: 'Routine bien-être : 7 gestes simples pour mieux vivre',
        description:
            'Adoptez une routine bien-être naturelle avec des gestes quotidiens faciles à mettre en place pour améliorer votre santé et votre humeur.',
        imageUrl: 'https://www.spiriteo.com/blog/wp-content/uploads/2023/04/soin-energetique.jpeg',
        author: 'Layla Hassan',
        content: `Voici 7 gestes simples pour une routine bien-être efficace :\n
    1. Méditation quotidienne de 10 minutes.\n
    2. Hydratation régulière avec de l'eau infusée aux fruits.\n
    3. Activité physique adaptée.\n
    4. Sommeil de qualité.\n
    5. Alimentation saine et équilibrée.\n
    6. Pratique du yoga ou étirements.\n
    7. Moments de détente sans écrans.\n
    Adoptez ces habitudes et observez la transformation de votre corps et esprit.`,
    },
];

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const postsToShow = showAll ? posts : posts.slice(0, 3);

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
                        <p className="text-sm text-gray-500 mb-2">Auteur : {selectedPost.author}</p>
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