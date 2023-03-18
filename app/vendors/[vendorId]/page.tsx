import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getCategories } from "../../../utils/fetchCategories";
import ShowByVendors from "../../../components/ShowByVendor";
import { getProductsByVendor } from "../../../utils/fetchProductsByVendor";
import Head from "next/head";
import { useRouter } from 'next/navigation'

const VendorPage = async({
  params,
}: {
  params: { vendorId: string };
}) => {
  const getProductsByVendor = async (query: String | undefined | String[]) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/vendors/${query}` //Sends request to your own backend API
    );

    const data = await res.json();
    const products: Product[] = data.productsByVendors;
    const vendor_image = data.vendor_image;

    return {
      products,
      vendor_image,
    };
  };

  const getCategories = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`, { next: { revalidate: 3600 }} //Sends request to your own backend API
    );

    const data = await res.json();
    const categories: Category[] = data.categories;

    return categories;
  };

  const vendorId  = params.vendorId;
  console.log(vendorId, "vendorId")
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
