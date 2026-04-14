export type ProductItem = {
  id: string;
  href: string;
  title: string;
  categoryName: string;
  categoryHref: string;
  img: string;
  imgDesktop: string;
  images?: string[];
  price?: string;
  priceOriginal?: string;
  discountText?: string;

  // ✅ ADD THIS
  Specifications?: Record<string, string>;
};

export type Props = {
    title: string;
    viewMoreLink?: string;
    items: ProductItem[];
};


type Specification = {
  key: string;
  value: string;
};