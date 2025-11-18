export type NavigationLink = {
  id: string;
  label: string;
  href: string;
};

export const navigationLinks: NavigationLink[] = [
  { id: "about", label: "About", href: "/#about" },
  { id: "leadership", label: "Leadership", href: "/#leadership" },
  { id: "ventures", label: "Ventures", href: "/#ventures" },
  { id: "media", label: "Media", href: "/#media" },
  { id: "gallery", label: "Gallery", href: "/#gallery" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export const contactLink: NavigationLink = {
  id: "contact",
  label: "Contact",
  href: "#contact",
};
