import ShowByCategories from "../../components/ShowByCategory";
import Head from "next/head";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { cache } from "react";
export const revalidate = 3600
const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const getVendors = cache(async () => {
    const query = groq`*[_type == "vendors"] { _id,... }`;
    const vendors: Vendor[] = await sanityClient.fetch(query);

    return vendors;
  });

  const getProductsByCategory = async (
    query: String | undefined | String[]
  ) => {
    const query_products = groq`*[_type == "product" && category._ref == "${query}"]  {
      _id,
        ...
    }`;
    const query_category = groq`*[_type == "category" && _id == "${query}"] {
      _id,
      title
    }`;
    const products = await sanityClient.fetch(query_products);
    const Category_title = await sanityClient.fetch(query_category);

    return {
      products,
      Category_title,
    };
  };

  const categoryId = params.categoryId;
  const vendors_promise = getVendors(); //Func made in utils
  const data_promise = getProductsByCategory(categoryId);

  const [data, vendors] = await Promise.all([data_promise, vendors_promise]);
  const { products } = data;
  const { Category_title } = data;
  return (
    <>
      {" "}
      {/* <Head>
        <title>{Category_title[0].title}</title>
        <meta
          name="description"
          content={`Checkout the latest ${Category_title[0].title} by our brands`}
        ></meta>
      </Head> */}
      <section className="">
        {/* {-mt-[100-vh] allows it to come on top as we scroll down because we have -100 margin from top} */}
        <ShowByCategories
          vendors={vendors}
          products={products}
          Category_title={Category_title}
        />
      </section>
    </>
  );
};

export default CategoryPage;

export const metadata = {
  title: 'Categories',
  description : 'One Stop Solution For Gadget Shopping'
}
