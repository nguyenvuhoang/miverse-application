import Link from "next/link";

interface MenuItem {
  href: string;
  label: string;
}

interface Props {
  data: { id: number; avatar: string; name: string; eth: number };
}

const menuItems: MenuItem[][] = [
  [
    { href: "/marketplace", label: "Marketplace" },
    { href: "/collection", label: "Collection" }
  ],
  [
    { href: "/verication", label: "Verication" },
    { href: "/mft-minting", label: "NFT minting" }
  ],
  [
    { href: "/our-team", label: "Our team" },
    { href: "/our-impact", label: "Our impact" },
    { href: "/faq", label: "FAQ" },
    { href: "/term-condition", label: "Term & conditions" },
    { href: "/privacy-policy", label: "Privacy policy" }

  ],
];

export default function FooterItems({ data }: Props) {
  return (
    <>
      {menuItems.map((menu, index) => (
        <div
          className={`col-lg-2 col-md-4 col-sm-${index === 1 ? 7 : 5} col-5`}
          key={index}
        >
          <div className={`widget widget-menu style-${index + 1}`}>
            <h5 className="title-widget">
              {index === 0
                ? "Browser"
                : index === 1
                ? "Creators"
                : "About"}
            </h5>
            <ul>
              {menu.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
