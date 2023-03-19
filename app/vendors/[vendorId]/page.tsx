import ShowByVendors from "../../../components/ShowByVendor";

import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
const VendorPage = async ({ params }: { params: { vendorId: string } }) => {
  const getProductsByVendor = async (query: String | undefined | String[]) => {
    const query_products = groq`*[_type == "product" && vendor._ref == "${params}"]  {
      _id,
        ...
    }`;
    const query_vendor = groq`*[_type == "vendors" && _id == "${params}"] {
      _id,
      title,
      image
    }`;
    const products = await sanityClient.fetch(query_products);
    const vendor_image = await sanityClient.fetch(query_vendor);

    return {
      products,
      vendor_image,
    };
  };

  const getCategories = async () => {
    const query = groq`*[_type == "category"] { _id,... }`;
    const categories = await sanityClient.fetch(query);

    return categories;
  };

  const vendorId = params.vendorId;
  console.log(vendorId, "vendorId");
  const categories_promise = getCategories(); //Func made in utils
  const data_promise = getProductsByVendor(vendorId);

  const [data, categories] = await Promise.all([
    data_promise,
    categories_promise,
  ]);
  const { products } = data;
  const { vendor_image } = data;

  return (
    <>
      {/* <Head>
        <title>{vendor_image[0].title}</title>
        <meta
          name="description"
          content="Get ready to witness the great technology presented by our brands."
        ></meta>
        <link rel="icon" href="/my_logo.png" />
      </Head> */}
      <section className="">
        {/* {-mt-[100-vh] allows it to come on top as we scroll down because we have -100 margin from top} */}
        <ShowByVendors
          categories={categories}
          products={products}
          vendor_image={vendor_image}
        />
      </section>
    </>
  );
};

export default VendorPage;
