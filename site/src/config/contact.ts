// One place for every contact detail. Replace the email when the branded address exists.
export const contact = {
  whatsappNumber: "27810898573",
  phoneDisplay: "081 089 8573",
  phoneHref: "tel:+27810898573",
  email: "evanjamesdavis10@gmail.com",
} as const;

export const waLink = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailLink = () =>
  `mailto:${contact.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(
    "Hi BrandMasters,\n\nMy business is: \nMy current website (if any): \n",
  )}`;
