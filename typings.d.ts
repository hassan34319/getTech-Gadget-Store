  //WE DO NOT NEED TO EXPORT OR IMPORT THIS FILE, IT IS AUTOMATICALLY FETCHED

interface Category { //Interface and type mean the same thing, Interface is just extendable.
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: "category";
    slug: {
      _type: "slug";
      current: string;
    };
    title: string;

  } // In sanity we only see the feild without an _ rest are stored in sanityLake.

  interface Image {
    _key: string;
    _type: "image";
    asset: {
      url: string;
    };
  }

  interface Vendor { //Interface and type mean the same thing, Interface is just extendable.
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: "vendors";
    slug: {
      _type: "slug";
      current: string;
    };
    title: string;
    image: Image[];
  } 
  interface Product {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: "product";
    title: string;
    price: number;
    slug: {
      _type: "slug";
      current: string;
    };
    description: string;
    category: {
      _type: "reference";
      _ref: string;
    };
    vendor: {
      _type: "reference";
      _ref: string;
    };
    image: Image[];
  } // In sanity we only see the feild without an _ rest are stored in sanityLake.

  


interface getByVendorProps {
  categories : Category[]
  products : Product[]
  vendor_image : {
    _id : String
    title : String,
    image : Image[]
  }[]
}

interface QueryProps {
  categories : Category[],
  products : Product[],
}
interface HeaderProps {
  categories : Category[],
  vendors : Vendor[],
}

interface getByCategoryProps {
  vendors : Vendor[]
  products : Product[]
  Category_title : {
    _id : String
    title : String
  }[]
}

interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number | null;
  price: {
    unit_amount: number;
  } | null;
}