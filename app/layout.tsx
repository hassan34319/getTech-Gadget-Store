import Header from "../components/Header";
import "../styles/globals.css";
import { Poppins } from 'next/font/google';
import AuthContext from "./authContext";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
    display: 'swap',
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets : ["latin", "devanagari", "latin-ext"],
    variable: '--font-poppins'
  })
export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const getVendors = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getVendors`,  { next: { revalidate: 3600 }} //Sends request to your own backend API
    );

    const data = await res.json();
    const vendors: Vendor[] = data.vendors;

    return vendors;
  };
  const getCategories = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`, { next: { revalidate: 3600 }} //Sends request to your own backend API
    );

    const data = await res.json();
    const categories: Category[] = data.categories;

    return categories;
  };
  const categories_promise = getCategories();
  const vendors_promise = getVendors()
  const [vendors, categories] = await Promise.all([
    vendors_promise,
    categories_promise,
  ]);

  const links_vendors = vendors.map((vendor)=> {
    return (
      {
        href : '/vendors/' +vendor._id,
        label : vendor.title
      }
    )
  })
  const links_categories = categories.map((category)=> {
    return (
      {
        href : category._id,
        label : category.title
      }
    )
  })
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <AuthContext>
        <Header links_categories={links_categories} links_vendors={links_vendors}></Header>
        {children}
        </AuthContext>
      </body>
    </html>
  );
}


