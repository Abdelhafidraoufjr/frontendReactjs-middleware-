import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { useEffect } from 'react';

export default function PostDetail({ post, onClose }) {
  const postUrl = `${window.location.origin}/blog/${post._id}`; // Remplace par ton routage réel si nécessaire

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    alert('Lien copié dans le presse-papiers !');
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto " style={{ zoom: 1.1 }}>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <button
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 text-2xl font-bold z-50"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
        >
          &times;
        </button>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold text-red-600">Article de blog</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-4 text-sm text-gray-500">
                  Auteur : {post.author.nom} {post.author.prenom}
                </p>
                <p className="mt-6 text-xl text-red-700">{post.description}</p>
              </div>
            </div>
          </div>

          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt={post.title}
              src={post.imageUrl}
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
            />
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base text-gray-700 lg:max-w-lg whitespace-pre-wrap">
                {post.content}
              </div>

              {/* Boutons de partage */}
              <div className="mt-10 flex gap-4">
                <button
                  type="button"
                  className="btn btn-success flex items-center gap-2 text-green-500"
                  onClick={() => {
                    const postUrl = window.location.href;
                    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + postUrl)}`;
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                  </svg>
                  Partager sur WhatsApp
                </button>
                <button
                  onClick={handleCopyLink}
                  className="text-sm text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded"
                >
                  Copier le lien
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
