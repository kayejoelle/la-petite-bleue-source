import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Coffee, Utensils, MapPin, ArrowRight, Quote } from "lucide-react";
import heroImg from "@/assets/hero-cafe.jpg";
import brunchImg from "@/assets/brunch-spread.jpg";
import latteImg from "@/assets/latte-art.jpg";
import terraceImg from "@/assets/terrace.jpg";
import { OpenStatus } from "@/components/OpenStatus";
import { HoursSection } from "@/components/HoursSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Petite Bleue — Brunch & Coffee · Opéra, Paris" },
      { name: "description", content: "Brunch parisien généreux, café de spécialité et ambiance cosy à deux pas de l'Opéra Garnier. Réservez votre table." },
      { property: "og:title", content: "La Petite Bleue — Brunch & Coffee · Opéra" },
      { property: "og:description", content: "Brunch généreux & café de spécialité au cœur du 9e arrondissement." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Intérieur du café La Petite Bleue, murs bleus et tables en marbre"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/40 to-background" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-start justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <OpenStatus className="mb-6 bg-background/80" />
          <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Brunch parisien,
            <br />
            <span className="italic text-accent">café d'exception.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/90 sm:text-xl">
            Une parenthèse douce et gourmande à deux pas de l'Opéra Garnier.
            Produits frais, plats généreux, café de spécialité.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/reservation"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              Réserver une table
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/20"
            >
              Découvrir la carte
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium">4,7 / 5</span>
              <span className="text-sm text-primary-foreground/70">
                · 12 208 avis Google
              </span>
            </div>
            <span className="hidden text-primary-foreground/40 sm:inline">|</span>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              13 Rue Auber, Paris 9e
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/70">
          Bienvenue
        </p>
        <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
          Une adresse comme un secret bien gardé,
          <br />
          <span className="italic text-primary">au cœur du 9e.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Inspirée par la rencontre entre la terre et l'océan, La Petite Bleue
          célèbre un brunch sincère, des produits choisis avec soin et un café
          torréfié comme une œuvre. Ici, chaque détail compte — du pain au bol.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            {
              icon: Utensils,
              title: "Cuisine généreuse",
              text: "Brunchs maison, œufs bénédicte, shakshuka, pancakes — tout est préparé minute avec des produits frais.",
            },
            {
              icon: Coffee,
              title: "Café de spécialité",
              text: "Grains sélectionnés et torréfiés pour révéler l'intensité, la rondeur et l'âme de chaque tasse.",
            },
            {
              icon: MapPin,
              title: "À deux pas de l'Opéra",
              text: "Une halte cosy au 13 Rue Auber, idéale entre une visite de Garnier et une balade haussmannienne.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT IMAGES */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={brunchImg}
              alt="Plateau de brunch avec œufs, saumon, pancakes et café"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              width={1600}
              height={1200}
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/70">
              Notre carte
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              Entre <span className="italic text-primary">terre</span> et{" "}
              <span className="italic text-primary">océan</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Des classiques revisités avec finesse : bénédict eggs au saumon
              fumé, shakshuka aux herbes fraîches, French toast caramélisé,
              œufs brouillés à la truffe… Le tout accompagné de jus pressés
              minute et de cafés signature.
            </p>
            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary hover:text-primary-glow"
            >
              Voir le menu complet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* COFFEE SECTION */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Café de spécialité
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl">
              L'art du café,
              <br />
              <span className="italic text-accent">tasse après tasse.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Espresso, latte, flat white, cappuccino — chaque boisson est
              préparée par nos baristas avec passion. Le matin pour démarrer,
              l'après-midi pour s'attarder.
            </p>
          </div>
          <div className="order-1 aspect-square overflow-hidden rounded-2xl lg:order-2">
            <img
              src={latteImg}
              alt="Latte art en cœur dans une tasse blanche"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/70">
            Ils en parlent
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium text-foreground sm:text-5xl">
            Plus de 12 000 avis,{" "}
            <span className="italic text-primary">4,7/5</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Selen D.",
              text: "Le lieu est très beau et agréable. Pancakes très bons, généreux, sauce chocolat parfaite. Le latte était également excellent.",
            },
            {
              name: "Kelly D.",
              text: "Un excellent brunch, aussi beau que bon ! Tout était frais et bien assaisonné. Service chaleureux et ambiance idéale.",
            },
            {
              name: "Nouha G.",
              text: "On s'y sent vraiment bien. Le personnel est super sympa et accueillant, et le chocolat chaud est vraiment très bon.",
            },
          ].map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Quote className="h-7 w-7 text-primary/30" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {t.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* HORAIRES */}
      <HoursSection />

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src={terraceImg}
          alt="Terrasse parisienne du café avec store bleu"
          className="h-full w-full object-cover absolute inset-0"
          loading="lazy"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-medium leading-tight text-primary-foreground sm:text-5xl">
            On vous attend pour un{" "}
            <span className="italic text-accent">moment doux</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/90">
            Réservez votre table en quelques secondes et offrez-vous une
            pause gourmande à Paris.
          </p>
          <Link
            to="/reservation"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:scale-[1.02]"
          >
            Réserver maintenant
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
