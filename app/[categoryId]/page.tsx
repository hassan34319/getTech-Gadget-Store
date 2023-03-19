import ShowByCategories from "../../components/ShowByCategory";
import Head from "next/head";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const getVendors = async () => {
    const query = groq`*[_type == "vendors"] { _id,... }`;
    const vendors: Vendor[] = await sanityClient.fetch(query);

    return vendors;
  };

  const getProductsByCategory = async (query:String|undefined|String[]) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/${query}` //Sends request to your own backend API
    );
  
    const data = await res.json()
    const products : Product[] = data.productsByCategory
    const Category_title = data.Category_title
  
    return {
        products,
        Category_title
    }
  };

  const categoryId = params.categoryId;
  const vendors_promise = getVendors(); //Func made in utils
  const data_promise = getProductsByCategory(categoryId);

  const [data, vendors] = await Promise.all([
    data_promise,
    vendors_promise,
  ]);
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


