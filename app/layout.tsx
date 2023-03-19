import Header from "../components/Header";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import AuthContext from "./authContext";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
type Data = {
  categories: Category[]; //Category Type is created in typings.d.ts. Due to that file name we do not need to import or export that file.
};

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari", "latin-ext"],
  variable: "--font-poppins",
});
export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const getVendors = async () => {
    const query = groq`*[_type == "vendors"] { _id,... }`;
    const vendors: Vendor[] = await sanityClient.fetch(query);

    return vendors;
  };
  const getCategories = async () => {
    const query = groq`*[_type == "category"] { _id,... }`;
    const categories =  await sanityClient.fetch(query);

    return categories;
  };
  const categories_promise = getCategories();
  const vendors_promise = getVendors();
  const [vendors, categories] = await Promise.all([
    vendors_promise,
    categories_promise,
  ]);

  const links_vendors = vendors.map((vendor : Vendor) => {
    return {
      href: "/vendors/" + vendor._id,
      label: vendor.title,
    };
  });
  const links_categories = categories.map((category : Category) => {
    return {
      href: category._id,
      label: category.title,
    };
  });
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <AuthContext>
          <Header
            links_categories={links_categories}
            links_vendors={links_vendors}
          ></Header>
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
