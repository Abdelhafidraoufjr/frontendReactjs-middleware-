import { useState } from 'react';
import logo from '../assets/logo.png';
import bgImage from '../assets/4088661.jpg';
import AdminForm from '../pages/AdminForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showAdminForm, setShowAdminForm] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [message, setMessage] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    if (adminPassword.trim().toLowerCase() === 'admin') {
      setMessage('✅ Fenêtre administrateur connecté');
    } else {
      setMessage('❌ Fenêtre erreur : mot de passe incorrect');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Erreur de connexion');
      }

      const data = await response.json();
      console.log('Connexion réussie :', data);
      alert('Connexion réussie !');
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      alert('Échec de la connexion.');
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-sm px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img alt="Logo" src={logo} className="mx-auto h-10 w-auto" />
            <br />
            {showAdminForm ? (
              <>
                <h2 className="text-3xl font-extrabold text-red-600 mb-6 text-center">
                  Connexion à l’espace administrateur
                </h2>
                <h2 className="text-2xl font-extrabold text-center text-gray-500">
                  تسجيل الدخول إلى مساحة المدير
                </h2>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-extrabold text-red-600 mb-6 text-center">
                  Connexion à l’espace utilisateur
                </h2>
                <h2 className="text-2xl font-extrabold text-center text-gray-500">
                  تسجيل الدخول إلى مساحة المستخدم
                </h2>
              </>
            )}

          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Adresse email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md px-3 py-1.5 text-base bg-white text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Mot de passe
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-red-600 hover:text-red-500">
                      Mot de passe oublié ?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md px-3 py-1.5 text-base bg-white text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600"
                >
                  Se connecter
                </button>
              </div>
            </form>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  setShowAdminForm(!showAdminForm);
                  setMessage('');
                  setAdminPassword('');
                }}
                className="flex items-center justify-center gap-2 w-full rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600"
              >
                <FontAwesomeIcon icon={faKey} style={{ color: '#FFD43B' }} className="w-5 h-5" />
                Connexion Administrateur
              </button>

              {showAdminForm && (
                <form onSubmit={handleAdminSubmit} className="mt-4">
                  <AdminForm
                    password={adminPassword}
                    setPassword={setAdminPassword}
                    message={message}
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-600"
                  >
                    Valider Admin
                  </button>
                </form>
              )}
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Pas encore membre ?{' '}
              <a href="/register" className="font-semibold text-red-600 hover:text-red-500">
                Créer un compte
              </a>
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-1/2 flex items-center justify-center text-white bg-cover bg-right"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-4xl font-bold text-center px-8">Bienvenue sur notre plateforme</h1>
      </div>

      {/* Bouton mode clair/sombre */}
      <div className="fixed z-50 bottom-6 right-6 sm:block">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="inline-flex items-center justify-center text-white transition-colors rounded-full size-14 bg-red-600 hover:bg-red-700"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.485-8.485h1m-17 0h1M16.95 7.05l.707-.707m-11.314 0l.707.707M16.95 16.95l.707.707m-11.314 0l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
