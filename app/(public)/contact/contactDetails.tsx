import contactData from "./contactData.json";
const { contactDetails } = contactData;

// 1. Build the Quick Contact data dynamically
const quickContact = [
    {
        id: "email",
        label: "Email Us",
        value: contactDetails.email,
        href: `mailto:${contactDetails.email}`,
    },
    {
        id: "phone",
        label: "Call Us",
        value: contactDetails.phone,
        href: `tel:${contactDetails.phone.replace(/\s+/g, "")}`, // Removes spaces for the link
    },
    {
        id: "hours",
        label: "Working Hours",
        value: contactDetails.workingHoursShort,
        href: null,
    },
];

// 2. Build the Studio Info data dynamically
const studioInfo = [
    {
        id: "location",
        title: "Visit Our Showroom",
        lines: contactDetails.locations,
        href: null,
        cta: null,
    },
    {
        id: "email",
        title: "Email Us",
        lines: [contactDetails.email],
        href: `mailto:${contactDetails.email}`,
        cta: "Send an email",
    },
    {
        id: "phone",
        title: "Call or WhatsApp",
        lines: [contactDetails.phone],
        href: `tel:${contactDetails.phone.replace(/\s+/g, "")}`,
        cta: "Call now",
    },
    {
        id: "hours",
        title: "Working Hours",
        lines: contactDetails.workingHoursDetailed,
        href: null,
        cta: null,
    },
];

export { quickContact, studioInfo };