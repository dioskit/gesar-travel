export const contact = {
  email: 'office@gesar-travel.com',
  // WhatsApp number in international format, digits only (e.g. '919876543210' for +91 98765 43210).
  // TODO: fill in the office WhatsApp number. While empty, links open WhatsApp and let the visitor pick a contact.
  whatsapp: '',
};

/** Link that opens a WhatsApp chat with the office, with `text` pre-filled. */
export function whatsappLink(text = 'Hello Gesar Travel! I’d like to ask about a trip to the Himalayas.') {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  {
    label: 'Destinations',
    href: '/destinations/',
    children: [
      { label: 'Ladakh', href: '/destinations/ladakh/' },
      { label: 'Bhutan', href: '/destinations/bhutan/' },
      { label: 'Sikkim & Darjeeling', href: '/destinations/sikkim-darjeeling/' },
      { label: 'North India', href: '/destinations/north-india/' },
    ],
  },
  { label: 'Individual Tours', href: '/individual-tours/' },
  { label: 'Group Tours', href: '/group-tours/' },
  { label: 'Wildlife', href: '/wildlife/' },
  { label: 'Team', href: '/team/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];
