import Link from "next/link";
import { notFound } from "next/navigation";
import {
    Star,
    Truck,
    ShieldCheck,
    Tag,
    ChevronRight,
    Minus,
    Plus,
    ChevronDown,
    Leaf,
    MapPin,
    Share2,
} from "lucide-react";

import { sideCoffeeProducts } from "@/lib/side-coffee-table.data";
import { diningCollections } from "@/lib/dining-tables.data";
import { chessCollections } from "@/lib/chess-collections.data";
import { luxuryCollections } from "@/lib/luxuries.data";
import { divineCollections } from "@/lib/divine-data";
import { chairCollections } from "@/lib/chairs-data";

import ProductGallery from "@/components/products/ProductGallery";
import { ReviewsSection } from "@/components/products/ReviewsSection";

export default function CollectionGridSection({ params }: { params: { id: string } }) {
    // 1. Find the current product
    const allProducts = [
        ...sideCoffeeProducts,
        ...diningCollections,
        ...chessCollections,
        ...luxuryCollections,
        ...divineCollections,
        ...chairCollections,
    ];

    const product = allProducts.find(
        (p) => p.href === `/products/${params.id}`
    );

    if (!product) return notFound();

    const isChessProduct =
        chessCollections.some((c) => c.href === product.href) ||
        product?.categoryName?.toLowerCase().includes("chess") ||
        product?.title?.toLowerCase().includes("chess");

    return (
        <div className="min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* ── DYNAMIC BREADCRUMBS ── */}
                {/* ── DYNAMIC BREADCRUMBS ── */}
                <nav className="flex items-center text-sm text-muted-foreground mb-8 mt-12 overflow-x-auto whitespace-nowrap pb-2">
                    <Link href="/" className="hover:text-primary transition-colors shrink-0">
                        Home
                    </Link>

                    <ChevronRight className="w-4 h-4 mx-2 shrink-0" />

                    {/* DYNAMIC CATEGORY LINK */}
                    <Link
                        href={product?.categoryHref || "/collections/all"}
                        className="hover:text-primary transition-colors shrink-0"
                    >
                        {product?.categoryName || "Collections"}
                    </Link>

                    <ChevronRight className="w-4 h-4 mx-2 shrink-0" />

                    {/* DYNAMIC PRODUCT NAME */}
                    <span className="text-foreground font-medium truncate">
                        {product?.title || "Product Name"}
                    </span>
                </nav>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">

                    {/* ── LEFT COLUMN: IMAGE GALLERY ── */}
                    <ProductGallery product={product} noThumbnail={!isChessProduct} />

                    {/* ── RIGHT COLUMN: PRODUCT DETAILS ── */}
                    <div className="mt-10 px-2 sm:px-0 lg:mt-0">

                        {/* Title & Reviews */}
                        <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-foreground mb-4">
                            {product?.title || "Product Name"}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-current" : "fill-muted text-muted"}`} />
                                ))}
                            </div>
                            <span className="text-sm text-primary font-medium cursor-pointer hover:underline">
                                24 Reviews
                            </span>
                        </div>

                        {/* Pricing */}
                        <div className="mb-6 pb-6 border-b border-border">
                            <div className="flex items-end gap-3 mb-1">
                                <span className="text-3xl font-bold tracking-tight">{product?.price}</span>
                                <span className="text-lg text-muted-foreground line-through mb-1">{product?.priceOriginal}</span>
                                <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded mb-1.5">
                                    {product?.discountText}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">(Inclusive of all taxes)</p>
                        </div>

                        {/* Offers Section */}
                        <div className="bg-secondary/20 border border-border rounded-lg p-4 mb-8">
                            <div className="flex items-start gap-3">
                                <Tag className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-semibold mb-1">Available Offers</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                        <li>Use code <span className="font-semibold text-foreground">ROYALTY10</span> for an extra 10% off.</li>
                                        <li>No cost EMI available on select credit cards.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Variants: Size */}
                        {/* <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-sm font-semibold">Select Size (LxWxH)</h3>
                                <button className="text-sm text-primary underline">Size Guide</button>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {["48\" x 24\" x 30\"", "60\" x 30\" x 30\"", "72\" x 36\" x 30\""].map((size, i) => (
                                    <button
                                        key={size}
                                        className={`py-3 px-4 rounded-md border text-sm font-medium transition-all ${i === 1
                                            ? "border-primary bg-primary/5 text-primary"
                                            : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div> */}

                        {/* Variants: Resin Color */}
                        {/* <div className="mb-8">
                            <h3 className="text-sm font-semibold mb-3">Resin Color</h3>
                            <div className="flex gap-3">
                                {[
                                    { name: "Ocean Blue", hex: "bg-blue-600", active: true },
                                    { name: "Emerald", hex: "bg-emerald-600", active: false },
                                    { name: "Onyx Black", hex: "bg-zinc-900", active: false },
                                    { name: "Crystal Clear", hex: "bg-slate-200", active: false },
                                ].map((color) => (
                                    <button
                                        key={color.name}
                                        title={color.name}
                                        className={`w-10 h-10 rounded-full border-2 transition-all ${color.active ? "border-primary ring-2 ring-primary/20 ring-offset-2" : "border-transparent hover:scale-110 shadow-sm"
                                            } ${color.hex}`}
                                    />
                                ))}
                            </div>
                        </div> */}

                        {/* Quantity & Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            {/* Quantity Selector */}
                            <div className="flex items-center justify-between border border-border rounded-lg w-full sm:w-32 h-12 px-2 shrink-0">
                                <button className="p-2 hover:bg-secondary rounded-md transition-colors">
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="font-medium text-sm">1</span>
                                <button className="p-2 hover:bg-secondary rounded-md transition-colors">
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            <button className="flex-1 bg-primary text-primary-foreground py-4 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all active:scale-[0.98]">
                                Add to Cart
                            </button>

                            <button className="flex-1 bg-foreground text-background py-4 sm:py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-all active:scale-[0.98]">
                                Buy it Now
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 py-6 border-y border-border mb-8">
                            <div className="flex items-center gap-3">
                                <Truck className="w-6 h-6 text-muted-foreground" />
                                <span className="text-sm font-medium">Free Pan-India Shipping</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-muted-foreground" />
                                <span className="text-sm font-medium">Lifetime Wood Warranty</span>
                            </div>
                        </div>


                        {/* Pincode Checker */}
                        <div className="bg-secondary/50 rounded-lg p-4 mt-2 flex flex-col gap-3 border border-border">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <MapPin className="w-4 h-4 text-primary" />
                                Check Delivery Options
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter Pincode"
                                    className="flex-1 px-3 py-2 border border-border rounded-md text-sm bg-background focus:outline-none focus:border-primary"
                                />
                                <button className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/80 transition-colors">
                                    Check
                                </button>
                            </div>
                            <p className="text-xs text-muted-foreground">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-2 py-4 border-y border-border mt-2">
                            <div className="flex flex-col items-center text-center gap-1.5">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Truck className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground">Free Standard<br />Shipping</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-1.5">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground">Secure<br />Checkout</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-1.5">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Leaf className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground">Premium<br />Materials</span>
                            </div>
                        </div>

                        {/* Product Info Accordions (Static implementation) */}
                        <div className="flex flex-col gap-0 border-b border-border">

                            {/* Specifications Detail */}
                            {/* ── PRODUCT DETAILS ACCORDIONS ── */}
                            <div className="flex flex-col gap-0 border-b border-border">

                                {/* 1. Product Description */}
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 border-t border-border">
                                        <span>Product Description</span>
                                        <span className="transition-transform duration-300 group-open:rotate-180">
                                            <ChevronDown className="w-4 h-4" />
                                        </span>
                                    </summary>
                                    <div className="text-sm text-muted-foreground pb-5 space-y-4 leading-relaxed animate-in fade-in slide-in-from-top-2">
                                        <p>
                                            Transform your space with this handcrafted masterpiece. Merging the raw, organic edges of premium Acacia wood with the deep, captivating clarity of crystal-clear epoxy resin, this table is designed to be a true conversation starter.
                                        </p>
                                        <p>
                                            Each piece is meticulously poured and cured over several weeks to ensure a durable, high-gloss finish. Because we use natural wood slabs, the grain tells its own unique story—meaning no two tables will ever be exactly alike.
                                        </p>
                                    </div>
                                </details>

                                {/* 2. Specifications Table (Based on Woodensure Reference) */}
                                <details className="group" open>
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 border-t border-border">
                                        <span>Specifications</span>
                                        <span className="transition-transform duration-300 group-open:rotate-180">
                                            <ChevronDown className="w-4 h-4" />
                                        </span>
                                    </summary>
                                    <div className="pb-5 animate-in fade-in slide-in-from-top-2">
                                        <div className="overflow-hidden rounded-md border border-border">
                                            <table className="w-full text-sm text-left border-collapse">
                                                <tbody>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border w-1/3 sm:w-1/4">Wood/Material</td>
                                                        <td className="p-3 text-muted-foreground">Live-edge Acacia Wood with Crystal-clear Epoxy Resin</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Dimension</td>
                                                        <td className="p-3 text-muted-foreground">4 FT L x 3 FT W x 2.5 H</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Items</td>
                                                        <td className="p-3 text-muted-foreground">Only Table with Assembly Accessories</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Color</td>
                                                        <td className="p-3 text-muted-foreground">Natural Wood Tone with Transparent Epoxy (Customizable)</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Design/Style</td>
                                                        <td className="p-3 text-muted-foreground">Live-edge Epoxy Resin Table, Modern Industrial, Handcrafted</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Weight</td>
                                                        <td className="p-3 text-muted-foreground">Varies (Acacia Wood + Metal Legs)</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Usage</td>
                                                        <td className="p-3 text-muted-foreground">Home, Office, Studio, Dining Table, Decorative Table</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Product Size</td>
                                                        <td className="p-3 text-muted-foreground">4 FT x 3 FT (Custom Sizes Available)</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Manufacturing Process</td>
                                                        <td className="p-3 text-muted-foreground">Handcrafted</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Base Type</td>
                                                        <td className="p-3 text-muted-foreground">U-frame Powder-coated Metal Legs</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Manufacturing</td>
                                                        <td className="p-3 text-muted-foreground">Made in the India with high-quality materials</td>
                                                    </tr>
                                                    <tr className="border-b border-border hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Delivery</td>
                                                        <td className="p-3 text-muted-foreground">PAN India Delivery</td>
                                                    </tr>
                                                    <tr className="hover:bg-secondary/20">
                                                        <td className="p-3 font-semibold bg-secondary/30 border-r border-border">Brand</td>
                                                        <td className="p-3 text-muted-foreground">Royality Resin</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </details>

                                {/* 3. Key Notes & Care */}
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 border-t border-border">
                                        <span>Key Notes & Care</span>
                                        <span className="transition-transform duration-300 group-open:rotate-180">
                                            <ChevronDown className="w-4 h-4" />
                                        </span>
                                    </summary>
                                    <div className="text-sm text-muted-foreground pb-5 animate-in fade-in slide-in-from-top-2">
                                        <div className="bg-secondary/30 p-4 rounded-md border border-border">
                                            <p className="italic font-semibold text-foreground mb-4 text-center">
                                                “Looks like glass, feels like glass, strong and sturdier than glass, but needs to be taken care like glass”
                                            </p>
                                            <ul className="list-disc list-outside ml-5 space-y-2.5">
                                                <li>Avoid placing boiling hot products above 95 degree Celsius.</li>
                                                <li>Avoid direct sun/placing outdoors for longer periods.</li>
                                                <li>Color variation may be present slightly due to lighting effect, clients can request additional images on WhatsApp.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </details>

                            </div>

                            {/* Care Detail */}
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 border-t border-border">
                                    <span>Care Instructions</span>
                                    <span className="transition group-open:rotate-180">
                                        <ChevronDown className="w-4 h-4" />
                                    </span>
                                </summary>
                                <div className="text-sm text-muted-foreground pb-4 leading-relaxed">
                                    Wipe clean with a soft, damp cloth. Avoid the use of harsh chemicals or abrasive cleaning materials. Do not place hot items directly on the epoxy surface; always use coasters or heat mats.
                                </div>
                            </details>

                        </div>

                        {/* Share */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                            <Share2 className="w-4 h-4" />
                            <span>Share this product</span>
                        </div>



                    </div>

                </div>
                <ReviewsSection />
            </div>
        </div>
    );
}