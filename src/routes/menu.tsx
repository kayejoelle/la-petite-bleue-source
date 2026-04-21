import { createFileRoute } from "@tanstack/react-router";
import medImg from "@/assets/dish-mediterranean.jpg";
import pancakesImg from "@/assets/dish-pancakes.jpg";
import shakshukaImg from "@/assets/dish-shakshuka.jpg";
import latteImg from "@/assets/latte-art.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Notre menu — La Petite Bleue · Brunch & Coffee" },
      { name: "description", content: "Découvrez notre carte : brunch, œufs, sweets, café de spécialité, smoothies et jus pressés." },
      { property: "og:title", content: "Notre menu — La Petite Bleue" },
      { property: "og:description", content: "Brunch parisien, café de spécialité et boissons fraîches au cœur de l'Opéra." },
    ],
  }),
  component: Menu,
});

interface Item {
  name: string;
  desc?: string;
  price: string;
  popular?: boolean;
}

const sections: { title: string; subtitle?: string; items: Item[]; image?: string }[] = [
  {
    title: "Between Earth & Ocean",
    subtitle: "Nos plats signatures",
    image: medImg,
    items: [
      { name: "Benedict Eggs", desc: "Pain de campagne, guacamole maison, choix saumon-fumé ou bacon de bœuf, deux œufs pochés, sauce hollandaise.", price: "20,00 €" },
      { name: "Shakshuka", desc: "Cassolette à base de caviar d'aubergines, tomates fraîches, poivrons frais, oignons, œuf au plat, feta grillée.", price: "16,00 €" },
      { name: "Aubergine mauve", desc: "Confite au four sur une crème de feta, raisins muscats glacés au pétimezi et épinards.", price: "16,00 €", popular: true },
      { name: "Mediterranean Toast", desc: "Pain de campagne, houmous, aubergines, tomates confites, olives, oignons confits, roquette, feta grillée, éclats de fruits secs, mélange de graines et un œuf poché ou brouillé.", price: "17,00 €", popular: true },
      { name: "Avocado Salmon Toast", desc: "Pain de campagne, stracciatella maison, tranches de saumon fumé, tranches d'avocat, grenade, feta, graines de courge et de chia.", price: "19,00 €" },
      { name: "Turkish Eggs", desc: "Œufs pochés sur un lit de yaourt grec, assaisonnés aux herbes fraîches, arrosés de beurre fondu au piment, éclats de noisette, accompagnés de tranches de pain libanais.", price: "17,00 €" },
      { name: "Burger LPB", desc: "Palerin de bœuf en cuisson lente marinade maison, cheddar mature, bacon de bœuf, roquette, sauce au fromage, oignons caramélisés et tomates cerises.", price: "25,00 €" },
      { name: "Croque à la truffe", desc: "Pain de campagne, béchamel à la truffe, jambon de poulet, mozzarella, parmesan.", price: "19,00 €" },
      { name: "Œufs brouillés à la truffe noire", desc: "Œufs brouillés à la lardons, copeaux de truffe fraîche.", price: "22,00 €" },
    ],
  },
  {
    title: "Suppléments",
    items: [
      { name: "Bacon de bœuf", price: "+5 €" },
      { name: "Halloumi", price: "+5 €" },
      { name: "Pommes de terre ou patates douces", price: "+6 €" },
    ],
  },
  {
    title: "Sweets",
    image: pancakesImg,
    items: [
      { name: "Pancakes Fruits Rouges", desc: "Crème de mascarpone, amandes effilées, servi avec du sirop d'érable ou sauce chocolat noisettes maison.", price: "15,00 €", popular: true },
      { name: "Pancakes Caramel", desc: "Pommes caramélisées à la cannelle, bananes, crème de mascarpone, noix de pécan, crumble maison, pistaches nappé d'une sauce caramel beurre salé.", price: "15,00 €" },
      { name: "Pancakes Tiramisu", desc: "Crème de mascarpone, nutella, café, poudre de cacao, éclats de noisettes.", price: "15,00 €" },
      { name: "French Toast", desc: "Brioche caramélisée façon pain perdu, poires pochées, citrons confits, crème de mascarpone, amandes effilées, pralinées.", price: "15,00 €" },
      { name: "Granola Bowl", desc: "Mousse de yaourt à la grecque au miel de fleurs sauvages, granola fait maison, fruits rouges.", price: "15,00 €" },
    ],
  },
  {
    title: "Boissons chaudes",
    image: latteImg,
    items: [
      { name: "Espresso", price: "2,70 €" },
      { name: "Double Espresso", price: "4,50 €" },
      { name: "Latte", price: "5,00 €" },
      { name: "Noisette", price: "3,50 €" },
      { name: "Cappuccino", price: "5,00 €" },
      { name: "Flat White", price: "6,00 €" },
      { name: "Macchiato Latte", price: "5,00 €" },
      { name: "Chaï Latte", price: "5,50 €" },
      { name: "Rose & Cardamome Latte", price: "6,00 €" },
      { name: "Chocolat Chaud", price: "5,00 €" },
      { name: "The Damman Frères", price: "7,00 €" },
      { name: "Americano", price: "4,50 €" },
      { name: "Matcha Latte", price: "5,50 €" },
      { name: "Gingerbread Latte", price: "7,00 €" },
    ],
  },
  {
    title: "Boissons fraîches",
    image: shakshukaImg,
    items: [
      { name: "Latte Glacé", price: "5,50 €" },
      { name: "Matcha thé Glacé", price: "6,00 €" },
      { name: "Chaï Latte Glacé", price: "6,00 €" },
      { name: "Americano Glacé", price: "5,00 €" },
      { name: "Rose & Cardamome Glacé", price: "6,50 €" },
      { name: "Chocolat glacé maison", price: "5,00 €" },
    ],
  },
  {
    title: "Smoothies",
    items: [
      { name: "Smoothie tarte aux pommes", desc: "Pommes, cannelle, vanille & flocons d'avoine, graines de sésame", price: "8,00 €" },
      { name: "Smoothie belle Hélène", desc: "Poires, chocolat, vanille, graines de chia", price: "8,00 €" },
      { name: "Coffee smoothie", desc: "Banane, café, sirop d'érable, cacao", price: "8,00 €" },
    ],
  },
  {
    title: "Jus fraîchement pressés",
    items: [
      { name: "Green", desc: "Pommes, citron, concombre, menthe & épinards", price: "8,00 €" },
      { name: "Amber", desc: "Carottes, ananas, gingembre frais & curcuma", price: "8,00 €" },
      { name: "Roseo", desc: "Betterave, pommes, gingembre frais", price: "8,00 €" },
      { name: "Citronade maison", desc: "Citron, menthe, fleur d'oranger", price: "8,00 €" },
      { name: "Jus d'oranges pressées", price: "7,00 €" },
    ],
  },
];

function Menu() {
  return (
    <div className="bg-background">
      {/* HEADER */}
      <section className="relative bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            La Carte
          </p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-tight sm:text-6xl">
            Une cuisine{" "}
            <span className="italic text-accent">passionnée</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Tous nos plats sont préparés minute, à partir de produits frais
            sélectionnés avec soin chez nos artisans partenaires.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <div className="mx-auto max-w-6xl space-y-24 px-4 py-24 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <section key={section.title}>
            <div className="mb-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                {section.subtitle && (
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary/60">
                    {section.subtitle}
                  </p>
                )}
                <h2 className="mt-2 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                  {section.title}
                </h2>
              </div>
              <div className="h-px flex-1 bg-border md:ml-8" />
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <ul className="space-y-6">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-dashed border-border pb-6 last:border-b-0"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {item.name}
                        {item.popular && (
                          <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                            Populaire
                          </span>
                        )}
                      </h3>
                      <span className="shrink-0 font-serif text-lg font-medium text-primary tabular-nums">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              {section.image && (
                <div className="relative hidden aspect-[3/4] overflow-hidden rounded-2xl md:block">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={1200}
                    height={1200}
                  />
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}