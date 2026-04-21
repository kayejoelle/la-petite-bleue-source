import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";
import { OpenStatus } from "@/components/OpenStatus";
import { DAYS_FR, HOURS } from "@/lib/hours";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & accès — La Petite Bleue · Opéra" },
      { name: "description", content: "Adresse, téléphone, horaires et accès au restaurant La Petite Bleue, 13 Rue Auber, 75009 Paris." },
      { property: "og:title", content: "Contact — La Petite Bleue" },
      { property: "og:description", content: "13 Rue Auber, 75009 Paris. Métro Opéra. Ouvert tous les jours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const order = [1, 2, 3, 4, 5, 6, 0];

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/70">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-5xl font-medium text-foreground sm:text-6xl">
            Venez nous <span className="italic text-primary">rencontrer</span>
          </h1>
          <div className="mt-6 flex justify-center">
            <OpenStatus />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Coordonnées */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Coordonnées
              </h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">13 Rue Auber, 75009 Paris</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Métro Opéra (3, 7, 8) · RER A
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <a href="tel:+33145716860" className="text-muted-foreground hover:text-primary">
                      01 45 71 68 60
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:contact@lapetitebleue.fr" className="text-muted-foreground hover:text-primary">
                      contact@lapetitebleue.fr
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Instagram</p>
                    <a
                      href="https://www.instagram.com/lapetitebleue.opera"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      @lapetitebleue.opera
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Horaires d'ouverture
              </h2>
              <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
                {order.map((d) => (
                  <li key={d} className="flex items-center justify-between px-5 py-3">
                    <span className="font-medium text-foreground">{DAYS_FR[d]}</span>
                    <span className="tabular-nums text-muted-foreground">
                      {HOURS[d].open} – {HOURS[d].close}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
            <iframe
              title="Localisation La Petite Bleue"
              src="https://www.google.com/maps?q=13+Rue+Auber,+75009+Paris&output=embed"
              className="h-full min-h-[500px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}