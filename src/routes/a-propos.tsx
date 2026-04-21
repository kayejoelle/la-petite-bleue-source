import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, Users, Award } from "lucide-react";
import terraceImg from "@/assets/terrace.jpg";
import heroImg from "@/assets/hero-cafe.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — La Petite Bleue · Brunch & Coffee" },
      { name: "description", content: "L'histoire et l'esprit de La Petite Bleue, une adresse parisienne dédiée au brunch et au café de spécialité." },
      { property: "og:title", content: "À propos — La Petite Bleue" },
      { property: "og:description", content: "L'âme du lieu : brunch sincère, café d'exception, Paris 9e." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-background">
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={terraceImg}
          alt="Terrasse parisienne avec store bleu"
          className="h-full w-full object-cover"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-4 pb-12 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Notre histoire
          </p>
          <h1 className="mt-4 font-serif text-5xl font-medium text-primary-foreground sm:text-6xl">
            L'esprit <span className="italic">Petite Bleue</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto text-foreground/90">
          <p className="text-xl leading-relaxed">
            Tout commence par une envie simple : créer un lieu qui ressemble à
            une parenthèse — douce, lumineuse, gourmande. Au cœur du 9e, à
            quelques pas de l'Opéra Garnier, La Petite Bleue est née de
            l'amour du brunch parisien et de l'exigence du café de spécialité.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Notre philosophie tient en trois mots : <em>fraîcheur</em>,{" "}
            <em>générosité</em>, <em>hospitalité</em>. Chaque assiette est
            préparée minute, chaque tasse extraite avec précision, chaque
            client accueilli comme un ami.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Leaf, title: "Produits frais", text: "Sélection quotidienne chez nos artisans." },
            { icon: Heart, title: "Fait maison", text: "Sauces, pains, granola, tout est préparé sur place." },
            { icon: Award, title: "Café de spécialité", text: "Grains torréfiés artisanalement." },
            { icon: Users, title: "Accueil chaleureux", text: "Une équipe passionnée qui prend soin de vous." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl">
          <img
            src={heroImg}
            alt="Intérieur du café"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1920}
            height={1280}
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Un cadre pensé comme{" "}
            <span className="italic text-primary">une maison</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Bleu profond, tables en marbre, lumière douce du matin… Notre
            espace a été imaginé pour vous offrir une bulle de calme dans
            l'effervescence parisienne. Idéal pour un brunch entre amis, un
            rendez-vous pro ou simplement un café en solo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/reservation"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
            >
              Réserver une table
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Voir le menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}