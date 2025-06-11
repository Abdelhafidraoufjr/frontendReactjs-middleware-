import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BlogDetail from '../pages/BlogDetail'; 

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/blogs/${id}`) 
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement du post');
        return res.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!post) return <p>Post non trouvé</p>;

  const handleClose = () => {
    window.history.back();
  };

  return <BlogDetail post={post} onClose={handleClose} />;
}
