// Horaires d'ouverture (Europe/Paris)
// Index 0 = dimanche, 1 = lundi, etc. (JS Date.getDay)
export const HOURS: Record<number, { open: string; close: string }> = {
  0: { open: "07:30", close: "20:00" }, // dimanche
  1: { open: "07:30", close: "19:00" }, // lundi
  2: { open: "07:30", close: "19:00" }, // mardi
  3: { open: "07:30", close: "19:00" }, // mercredi
  4: { open: "07:30", close: "19:00" }, // jeudi
  5: { open: "07:30", close: "20:00" }, // vendredi
  6: { open: "07:30", close: "20:00" }, // samedi
};

export const DAYS_FR = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function getParisNow(): Date {
  // Convertit en heure Paris
  const now = new Date();
  const parisString = now.toLocaleString("en-US", { timeZone: "Europe/Paris" });
  return new Date(parisString);
}

export interface OpenStatus {
  isOpen: boolean;
  label: string;
  detail: string;
}

export function getOpenStatus(now: Date = getParisNow()): OpenStatus {
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const today = HOURS[day];
  const openMin = toMinutes(today.open);
  const closeMin = toMinutes(today.close);

  if (minutes >= openMin && minutes < closeMin) {
    return {
      isOpen: true,
      label: "Ouvert",
      detail: `Ferme à ${today.close}`,
    };
  }

  if (minutes < openMin) {
    return {
      isOpen: false,
      label: "Fermé",
      detail: `Ouvre à ${today.open}`,
    };
  }

  // Après fermeture — chercher prochain jour
  const nextDay = (day + 1) % 7;
  return {
    isOpen: false,
    label: "Fermé",
    detail: `Ouvre ${DAYS_FR[nextDay].toLowerCase()} à ${HOURS[nextDay].open}`,
  };
}