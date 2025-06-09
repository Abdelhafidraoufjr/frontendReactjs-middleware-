import { useState } from 'react';
import logo from '../assets/logo.png';
import bgImage from '../assets/4088661.jpg';
import axios from 'axios';

const Register = () => {
    const [form, setForm] = useState({
        nom: '',
        prenom: '',
        username: '',
        email: '',
        password: '',
        genre: '',
    });

    const [darkMode, setDarkMode] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/register', form);
            alert(response.data.message);
            window.location.href = '/login';
        } catch (error) {
            console.error('Erreur d’inscription :', error.response?.data || error.message);
            alert(error.response?.data?.message || "Erreur lors de l'inscription");
        }
    };

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="flex min-h-screen bg-white dark:bg-gray-900">
                <div
                    className="hidden lg:flex w-1/2 items-center justify-center text-white bg-cover bg-right"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <h1 className="text-4xl font-bold text-center px-8">Bienvenue sur notre plateforme</h1>
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center bg-white dark:bg-gray-900 px-6">
                    <div className="w-full max-w-4xl py-12 flex flex-col items-center">
                        <div className="sm:w-full sm:max-w-sm text-center">
                            <img alt="Logo" src={logo} className="mx-auto h-10 w-auto" />
                            <h2 className="text-3xl font-extrabold text-red-600 mb-6">
                                inscrivez-vous pour accéder à l’espace utilisateur
                            </h2>
                            <h2 className="text-2xl font-extrabold text-black-500 mb-10">
                                إنشاء حساب للولوج الى مساحة المستخدم                           </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10 w-full max-w-[700px]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col items-center">
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Nom</label>
                                    <input
                                        name="nom"
                                        type="text"
                                        required
                                        value={form.nom}
                                        onChange={handleChange}
                                        className="w-full max-w-xs rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:outline-red-600"
                                    />
                                </div>

                                <div className="flex flex-col items-center">
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Prénom</label>
                                    <input
                                        name="prenom"
                                        type="text"
                                        required
                                        value={form.prenom}
                                        onChange={handleChange}
                                        className="w-full max-w-xs rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:outline-red-600"
                                    />
                                </div>

                                <div className="flex flex-col items-center">
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Nom d'utilisateur</label>
                                    <input
                                        name="username"
                                        type="text"
                                        required
                                        value={form.username}
                                        onChange={handleChange}
                                        className="w-full max-w-xs rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:outline-red-600"
                                    />
                                </div>

                                <div className="flex flex-col items-center">
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        className="w-full max-w-xs rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:outline-red-600"
                                    />
                                </div>

                                <div className="flex flex-col items-center">
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Mot de passe</label>
                                    <input
                                        name="password"
                                        type="password"
                                        required
                                        value={form.password}
                                        onChange={handleChange}
                                        className="w-full max-w-xs rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:outline-red-600"
                                    />
                                </div>

                                <div className="flex flex-col items-center">
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Genre</label>
                                    <select
                                        name="genre"
                                        value={form.genre}
                                        onChange={handleChange}
                                        className="w-full max-w-xs rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 focus:outline-2 focus:outline-red-600"
                                    >
                                        <option value="">-- Choisir --</option>
                                        <option value="male">Homme</option>
                                        <option value="female">Femme</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="mt-6 w-48 rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600"
                                >
                                    S'inscrire
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-300 w-full max-w-[700px]">
                            Vous avez déjà un compte ?{' '}
                            <a href="/login" className="font-semibold text-red-600 hover:text-red-400">
                                Connectez-vous
                            </a>
                        </p>
                    </div>
                </div>
            </div>

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

export default Register;
