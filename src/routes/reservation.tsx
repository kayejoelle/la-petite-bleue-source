import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, Check } from "lucide-react";
import { HOURS, DAYS_FR } from "@/lib/hours";
import brunchImg from "@/assets/brunch-spread.jpg";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Réserver une table — La Petite Bleue · Brunch & Coffee" },
      { name: "description", content: "Réservez votre table en ligne au restaurant La Petite Bleue, près de l'Opéra à Paris." },
      { property: "og:title", content: "Réservation — La Petite Bleue" },
      { property: "og:description", content: "Réservation en ligne, rapide et simple. Brunch, café, déjeuner." },
    ],
  }),
  component: Reservation,
});

const TIME_SLOTS = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30",
];

function Reservation() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    date: today,
    time: "11:00",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Merci de remplir tous les champs requis.");
      return;
    }
    setSubmitted(true);
    toast.success("Réservation envoyée !", {
      description: `Nous confirmons par email à ${form.email}.`,
    });
  };

  if (submitted) {
    const d = new Date(form.date);
    const dayName = DAYS_FR[d.getDay()];
    return (
      <div className="bg-background">
        <section className="mx-auto max-w-2xl px-4 py-32 text-center sm:px-6 lg:px-8">
          <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-success/15 text-success">
            <Check className="h-10 w-10" strokeWidth={2.5} />
          </div>
          <h1 className="mt-8 font-serif text-4xl font-medium text-foreground sm:text-5xl">
            Réservation <span className="italic text-primary">confirmée</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Merci {form.name.split(" ")[0]} ! Nous avons hâte de vous accueillir.
          </p>
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-card p-6 text-left" style={{ boxShadow: "var(--shadow-soft)" }}>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Date</dt>
                <dd className="font-medium text-foreground">{dayName} {d.toLocaleDateString("fr-FR")}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Heure</dt>
                <dd className="font-medium text-foreground">{form.time}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Convives</dt>
                <dd className="font-medium text-foreground">{form.guests} personne{Number(form.guests) > 1 ? "s" : ""}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Au nom de</dt>
                <dd className="font-medium text-foreground">{form.name}</dd>
              </div>
            </dl>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Une confirmation vous a été envoyée à <strong>{form.email}</strong>.
          </p>
          <button
            onClick={() => navigate({ to: "/" })}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
          >
            Retour à l'accueil
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl lg:grid-cols-2">
        {/* Image side */}
        <div className="relative hidden lg:block">
          <img
            src={brunchImg}
            alt="Brunch parisien"
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-primary/30" />
          <div className="relative flex h-full flex-col justify-end p-12 text-primary-foreground">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              Réservation
            </p>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-tight">
              Une table vous attend{" "}
              <span className="italic">chez nous</span>.
            </h2>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/90">
              Réservez en quelques secondes. Nous vous confirmons par email.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-primary-foreground/80">
              <li>· Réservation gratuite</li>
              <li>· Confirmation immédiate par email</li>
              <li>· Annulation possible jusqu'à 2h avant</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="px-4 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-md">
            <h1 className="font-serif text-4xl font-medium text-foreground">
              Réserver
            </h1>
            <p className="mt-2 text-muted-foreground">
              Remplissez le formulaire ci-dessous.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field icon={Calendar} label="Date" name="date" type="date" value={form.date} min={today} onChange={handleChange} required />
                <Field icon={Users} label="Convives" name="guests" as="select" value={form.guests} onChange={handleChange}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} personne{n > 1 ? "s" : ""}</option>
                  ))}
                  <option value="9">9 personnes ou +</option>
                </Field>
              </div>

              <Field icon={Clock} label="Heure" name="time" as="select" value={form.time} onChange={handleChange}>
                {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
              </Field>

              <Field icon={User} label="Nom complet" name="name" value={form.name} onChange={handleChange} required placeholder="Marie Dupont" />
              <Field icon={Mail} label="Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="vous@email.com" />
              <Field icon={Phone} label="Téléphone" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="06 12 34 56 78" />
              <Field icon={MessageSquare} label="Demandes spéciales (facultatif)" name="notes" as="textarea" value={form.notes} onChange={handleChange} placeholder="Allergies, anniversaire, etc." />

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary-glow hover:shadow-lg"
              >
                Confirmer ma réservation
              </button>

              <p className="text-center text-xs text-muted-foreground">
                En réservant, vous acceptez nos conditions. Pas de frais.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FieldProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  min?: string;
  as?: "input" | "select" | "textarea";
  children?: React.ReactNode;
}

function Field({ icon: Icon, label, name, type = "text", value, onChange, required, placeholder, min, as = "input", children }: FieldProps) {
  const baseClass = "w-full rounded-xl border border-input bg-background pl-10 pr-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}{required && " *"}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        {as === "select" ? (
          <select id={name} name={name} value={value} onChange={onChange} required={required} className={baseClass + " appearance-none"}>
            {children}
          </select>
        ) : as === "textarea" ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={3}
            className={baseClass.replace("py-3", "py-3 pt-3") + " min-h-[90px] resize-none"}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            min={min}
            className={baseClass}
          />
        )}
      </div>
    </div>
  );
}