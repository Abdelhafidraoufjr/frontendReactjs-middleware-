import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels sont les avantages de la médecine naturelle ?",
    answer:
      "Elle favorise l’équilibre global du corps, renforce l’immunité et utilise des remèdes sans effets secondaires chimiques.",
  },
  {
    question: "Les plantes médicinales sont-elles vraiment efficaces ?",
    answer:
      "Oui, certaines plantes comme la camomille, le gingembre ou le curcuma ont des propriétés reconnues pour soulager naturellement certains maux.",
  },
  {
    question: "Comment soulager le stress naturellement ?",
    answer:
      "La méditation, les tisanes relaxantes (comme la verveine ou la lavande) et les huiles essentielles sont très efficaces.",
  },
  {
    question: "Les remèdes naturels conviennent-ils à tout le monde ?",
    answer:
      "Ils sont généralement sûrs, mais il est important de consulter un professionnel, surtout pour les femmes enceintes ou les enfants.",
  },
  {
    question: "Comment bien débuter en médecine naturelle ?",
    answer:
      "Commencez par des gestes simples : une alimentation saine, des plantes douces en infusion, et écoutez les besoins de votre corps.",
  },
];

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-neutral-100 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">
          Foire aux questions
        </h2>
        <p className="text-black">
          Découvrez des remèdes naturels transmis de génération en génération,<br />
          Vivez en harmonie avec votre corps et la nature.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-neutral-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              <span className="text-left font-medium text-lg">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-neutral-850 text-black">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
