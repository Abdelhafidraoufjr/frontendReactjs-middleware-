import { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex h-screen">
      {/* Partie gauche */}
      <div className="w-1/2 bg-green-600 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold text-center px-8">Rejoignez notre communauté</h1>
      </div>

      {/* Partie droite */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-sm px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=green&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Créez votre compte
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900">Nom</label>
                <input
                  name="nom"
                  type="text"
                  required
                  value={form.nom}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">Prénom</label>
                <input
                  name="prenom"
                  type="text"
                  required
                  value={form.prenom}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">Nom d'utilisateur</label>
                <input
                  name="username"
                  type="text"
                  required
                  value={form.username}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">Adresse email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">Mot de passe</label>
                <input
                  name="password"
                  type="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"
                />
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                S'inscrire
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Vous avez déjà un compte ?{' '}
              <a href="/login" className="font-semibold text-green-600 hover:text-green-500">
                Connectez-vous
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
