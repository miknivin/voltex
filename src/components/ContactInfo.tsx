import Image from "next/image";
import officeIcon from "../../public/icons/contact-office.svg";
import phoneIcon from "../../public/icons/contact-phone.svg";
import emailIcon from "../../public/icons/contact-email.svg";
import hoursIcon from "../../public/icons/contact-hours.svg";
import GradientOrbs from "./GradientOrbs";

const CARDS = [
  {
    icon: officeIcon,
    title: "Head Office",
    lines: ["Level 42, The Leadenhall", "Building", "122 Leadenhall St, London"],
  },
  {
    icon: phoneIcon,
    title: "Direct Line",
    lines: ["+44 (0) 20 7123 4567"],
    caption: "Priority routing for existing clients",
  },
  {
    icon: emailIcon,
    title: "Secure Email",
    lines: ["privateclients@vltx.com"],
    caption: "PGP key available upon request",
  },
  {
    icon: hoursIcon,
    title: "Operating Hours",
    lines: ["Mon - Fri: 08:00 - 18:00 (GMT)"],
    caption: "Vault access by appointment",
  },
];

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden pb-20 lg:pb-28">
      <GradientOrbs variant="bottom-left" opacity={0.1} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div key={card.title} className="rounded-lg border border-line bg-card p-10">
              <Image src={card.icon} alt="" className="h-7 w-auto" />
              <h3 className="mt-4 font-display text-xl font-normal text-text-primary">
                {card.title}
              </h3>
              <div className="mt-4">
                {card.lines.map((line) => (
                  <p key={line} className="text-sm leading-5 text-text-muted">
                    {line}
                  </p>
                ))}
                {card.caption && (
                  <p className="mt-1 text-xs leading-4 text-text-mutedmore">
                    {card.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
