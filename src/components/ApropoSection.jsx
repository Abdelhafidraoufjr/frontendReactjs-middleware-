export default function AboutPage() {
  const timeline = [
    { year: "2010", event: "Lancement du blog, partage des premiers remèdes naturels." },
    { year: "2013", event: "Publication de guides détaillés sur les plantes médicinales." },
    { year: "2017", event: "Partenariat avec des experts en médecine douce." },
    { year: "2020", event: "Lancement de la newsletter pour accompagner nos lecteurs." },
    { year: "2024", event: "Plus de 100 000 visiteurs mensuels et une communauté active." },
  ];

  const stats = [
    { label: "Articles publiés", value: "350+" },
    { label: "Recettes naturelles", value: "120+" },
    { label: "Consultations", value: "5000+" },
    { label: "Abonnés newsletter", value: "15K+" },
  ];

  return (
    <main className="bg-neutral-900 text-neutral-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          À propos de notre blog
        </h1>
        <p className="text-neutral-400 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          Découvrez des remèdes naturels transmis de génération en génération, vivez en harmonie avec votre corps et la nature.
        </p>

        {/* Flex container for timeline and stats */}
        <section className="flex flex-col md:flex-row md:space-x-12 mb-16">
          {/* Timeline - Left */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
              Notre histoire
            </h2>
            <div className="relative border-l border-neutral-700 ml-6">
              {timeline.map(({ year, event }, idx) => (
                <div key={idx} className="mb-10 ml-6 relative">
                  <span className="absolute -left-9 top-0 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white font-semibold text-sm">
                    {year}
                  </span>
                  <p className="text-neutral-300 leading-relaxed">{event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats - Right */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
              Nos chiffres clés
            </h2>
            <div className="grid grid-cols-2 gap-8 text-center md:text-left">
              {stats.map(({ label, value }, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-red-600 transition-shadow"
                >
                  <p className="text-4xl font-bold text-red-600 mb-2">{value}</p>
                  <p className="text-neutral-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <p className="text-neutral-400 text-center max-w-2xl mx-auto">
          Merci de nous accompagner dans ce voyage vers une santé naturelle et équilibrée. N’hésitez pas à explorer nos articles, poser vos questions, et partager vos expériences.
        </p>
      </div>
    </main>
  );
}
