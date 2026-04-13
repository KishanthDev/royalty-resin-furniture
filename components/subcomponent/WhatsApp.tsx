import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/+919035494485?text=Hello%20Royalty%20Resin!%20I%20have%20a%20question%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-105 transition"
        >
            <FaWhatsapp size={26} />
        </a>
    );
}