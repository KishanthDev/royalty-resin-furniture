import { Navbar } from "../../components/subcomponent/Navbar";
import { Footer } from "../../components/subcomponent/Footer";
import WhatsAppButton from "@/components/subcomponent/WhatsApp";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <WhatsAppButton />
            <Footer />
        </>
    );
}