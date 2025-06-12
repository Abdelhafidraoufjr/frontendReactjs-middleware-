import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Notre Mission</h2>
          <p className="text-sm leading-relaxed">
            Fournir des solutions digitales innovantes qui connectent, inspirent et transforment les communautés à travers la technologie moderne.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Liens utiles</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition duration-300">Accueil</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">À propos</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Services</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Suivez-nous</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition duration-300">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Contact</h2>
          <p className="text-sm">Email : contact@entreprise.com</p>
          <p className="text-sm">Téléphone : +212 600 000 000</p>
          <p className="text-sm">Adresse : 123 Avenue, Casablanca, Maroc</p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
