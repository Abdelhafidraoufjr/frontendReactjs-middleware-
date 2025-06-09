import { useState } from 'react';
import logo from '../assets/logo.png'
import bgImage from '../assets/4088661.jpg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Connexion avec Google");
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-sm px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img alt="Logo" src={logo} className="mx-auto h-10 w-auto" />
            <br />
            <h2 className={`text-3xl font-extrabold text-red-600 mb-6 text-center`}>
              Connexion à l’espace utilisateur
            </h2>
            <h2 className="text-2xl font-extrabold text-center text-gray-500">
              تسجيل الدخول إلى مساحة المستخدم
            </h2>
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
                    className={`block w-full rounded-md px-3 py-1.5 text-base ${
                      darkMode
                        ? 'bg-gray-800 text-white placeholder:text-gray-400 outline outline-1 outline-gray-700 focus:outline-2 focus:outline-red-500'
                        : 'bg-white text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600'
                    }`}
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
                    className={`block w-full rounded-md px-3 py-1.5 text-base ${
                      darkMode
                        ? 'bg-gray-800 text-white placeholder:text-gray-400 outline outline-1 outline-gray-700 focus:outline-2 focus:outline-red-500'
                        : 'bg-white text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600'
                    }`}
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

            <button
              onClick={handleGoogleLogin}
              className={`mt-4 flex w-full items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm ${
                darkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg
                className="mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 533.5 544.3"
                aria-hidden="true"
                focusable="false"
              >
                <path fill="#4285f4" d="M533.5 278.4c0-18.5-1.6-36.3-4.6-53.6H272v101.4h146.9c-6.3 33.9-25.4 62.6-54.2 81.8v67h87.7c51.4-47.3 81.1-117.1 81.1-196.6z" />
                <path fill="#34a853" d="M272 544.3c73.6 0 135.5-24.4 180.6-66.1l-87.7-67c-24.3 16.3-55.4 25.9-92.9 25.9-71.4 0-132-48.2-153.5-112.9H28.7v70.9C74 484.2 166.5 544.3 272 544.3z" />
                <path fill="#fbbc04" d="M118.5 320.1c-5-15-7.9-31-7.9-47.5s2.9-32.5 7.9-47.5v-70.9H28.7c-18.3 36.2-28.7 76.9-28.7 118.4s10.4 82.2 28.7 118.4l89.8-70.9z" />
                <path fill="#ea4335" d="M272 107.7c39.9 0 75.8 13.7 104.1 40.6l78.1-78.1C406.9 24.4 345 0 272 0 166.5 0 74 60.1 28.7 151.7l89.8 70.9c21.6-64.7 82.2-112.9 153.5-112.9z" />
              </svg>
              Connexion avec Google
            </button>

            <p className="mt-10 text-center text-sm text-gray-500">
              Pas encore membre ?{' '}
              <a href="/register" className="font-semibold text-red-600 hover:text-red-500">
                Créer un compte
              </a>
            </p>
          </div>
        </div>

        {/* Toggle Button */}
<div className="fixed z-50 bottom-6 right-6 sm:block">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="inline-flex items-center justify-center text-white transition-colors rounded-full size-14 bg-red-600 hover:bg-red-700"
  >
    {darkMode ? (
      // Icône Soleil (mode clair)
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
      // Icône Lune (mode sombre)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
      </svg>
    )}
  </button>
</div>

      </div>

      <div
        className="w-1/2 flex items-center justify-center text-white bg-cover bg-right"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-4xl font-bold text-center px-8">Bienvenue sur notre plateforme</h1>
      </div>
    </div>
  );
};

export default Login;
