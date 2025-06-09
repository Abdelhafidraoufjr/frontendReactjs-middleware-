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
            <div className="flex h-screen bg-white dark:bg-gray-900">
                {/* Partie gauche */}
                <div
                    className="w-1/2 flex items-center justify-center text-white bg-cover bg-right"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <h1 className="text-4xl font-bold text-center px-8">Bienvenue sur notre plateforme</h1>
                </div>

                {/* Partie droite */}
                <div className="w-1/2 flex items-center justify-center bg-white dark:bg-gray-900">
                    <div className="w-full max-w-sm px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img alt="Logo" src={logo} className="mx-auto h-10 w-auto" />
                        <h2 className={`text-3xl font-extrabold text-red-600 mb-6 text-center`}>
                            inscrivez-vous pour accéder à l’espace utilisateur
                        </h2>
                        <h2 className="text-2xl font-extrabold text-center text-gray-500">
                            تسجيل الدخول إلى مساحة المستخدم
                        </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {[
                                    { label: 'Nom', name: 'nom', type: 'text' },
                                    { label: 'Prénom', name: 'prenom', type: 'text' },
                                    { label: "Nom d'utilisateur", name: 'username', type: 'text' },
                                    { label: 'Adresse email', name: 'email', type: 'email' },
                                    { label: 'Mot de passe', name: 'password', type: 'password' },
                                ].map(({ label, name, type }) => (
                                    <div key={name}>
                                        <label className="block text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                                        <input
                                            name={name}
                                            type={type}
                                            required
                                            value={form[name]}
                                            onChange={handleChange}
                                            className="mt-2 block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:outline-red-600"
                                        />
                                    </div>
                                ))}

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600"
                                    >
                                        S'inscrire
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-300">
                                Vous avez déjà un compte ?{' '}
                                <a href="/login" className="font-semibold text-red-600 hover:text-red-400">
                                    Connectez-vous
                                </a>
                            </p>
                        </div>
                    </div>
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
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Register;
