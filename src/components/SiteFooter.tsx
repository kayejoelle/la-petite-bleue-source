import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { DAYS_FR, HOURS } from "@/lib/hours";

export function SiteFooter() {
  // Réordonner: lundi -> dimanche
  const order = [1, 2, 3, 4, 5, 6, 0];

  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <p className="font-serif text-2xl font-semibold">
            La Petite <span className="italic">Bleue</span>
          </p>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Brunch & Coffee · Opéra
          </p>
          <p className="mt-6 text-sm leading-relaxed text-primary-foreground/80">
            Une parenthèse gourmande à deux pas de l'Opéra Garnier. Brunch
            généreux et café de spécialité, du matin au soir.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>13 Rue Auber<br />75009 Paris</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+33145716860" className="hover:text-accent">
                01 45 71 68 60
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 shrink-0" />
              <a
                href="https://www.instagram.com/lapetitebleue.opera"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                @lapetitebleue.opera
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold">Horaires</h3>
          <ul className="mt-4 space-y-1.5 text-sm text-primary-foreground/80">
            {order.map((d) => (
              <li key={d} className="flex justify-between gap-4">
                <span>{DAYS_FR[d]}</span>
                <span className="tabular-nums">
                  {HOURS[d].open} – {HOURS[d].close}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold">Naviguer</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/menu" className="hover:text-accent">Menu</Link></li>
            <li><Link to="/a-propos" className="hover:text-accent">À propos</Link></li>
            <li><Link to="/reservation" className="hover:text-accent">Réservation</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-3 py-1.5 text-xs">
            <Clock className="h-3.5 w-3.5" />
            Heure de Paris
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} La Petite Bleue. Tous droits réservés.</p>
          <p>Brunch & Coffee — Paris 9e</p>
        </div>
      </div>
    </footer>
  );
}