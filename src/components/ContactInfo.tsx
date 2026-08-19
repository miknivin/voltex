import Image from "next/image";
import officeIcon from "../../public/icons/contact-office.svg";
import phoneIcon from "../../public/icons/contact-phone.svg";
import emailIcon from "../../public/icons/contact-email.svg";
import hoursIcon from "../../public/icons/contact-hours.svg";
import sectionVector from "../../public/images/section-vector.png";

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
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-64 -z-10 w-325 max-w-none rotate-12 opacity-50 select-none lg:w-[1600px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div key={card.title} className="rounded-lg bg-[rgba(10,10,10,0.6)] p-10">
              <Image src={card.icon} alt="" className="h-7 w-auto" />
              <h3 className="mt-4 font-display text-xl font-normal text-white">
                {card.title}
              </h3>
              <div className="mt-4">
                {card.lines.map((line) => (
                  <p key={line} className="text-sm leading-5 text-[#d0c5af]">
                    {line}
                  </p>
                ))}
                {card.caption && (
                  <p className="mt-1 text-xs leading-4 text-[#99907c]">
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
