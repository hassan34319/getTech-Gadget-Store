import Landing from "../components/Landing";
import NewPromos from "../components/HomePageProducts";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
export const revalidate = 3600

const Home = async () => {
  const getProducts = async () => {
    const query = groq`*[_type == "product"] {
        _id,
          ...
      } | order(_createdAt desc)`;
    const products = await sanityClient.fetch(query);

    return products;
  };

  const getCategories = async () => {
    const query = groq`*[_type == "category"] { _id,... }`;
    const categories = await sanityClient.fetch(query);

    return categories;
  };

  const products_promise = getProducts();
  const categories_promise = getCategories();

  const [products, categories] = await Promise.all([
    products_promise,
    categories_promise,
  ]);

  return (
    <div className="">
      {/* <Head>
        <title>Getech</title>
        <meta
          name="description"
          content={`Welcome to our ecommerce store, where we are passionate about
          providing the latest and greatest gadgets to our customers. Our team
          is made up of technology enthusiasts who love to stay up to date
          with the latest advancements in the industry.`}
        ></meta>
        <link rel="icon" href="/my_logo.png" />
      </Head> */}
      <main className="relative h-[200vh] bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB]">
        {/* Screen size is 100vh, 200vh means that content of same size as the screen lies under it I.e when we scroll. This is done so that our content is scrollable and so that we can do our animation of bring the new promos up */}
        <Landing />
      </main>
      <section
        id="section-1"
        className="relative z-40 -mt-[100vh] min-h-screen bg-[#28282B] "
      >
        {/* {-mt-[100-vh] allows it to come on top as we scroll down because we have -100 margin from top} */}
        <NewPromos categories={categories} products={products} />
      </section>
    </div>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps<QueryProps> = async () => {
//   // This means getserverSideProps is of type GetServerSideProps
//   const categories = await getCategories() //Func made in utils
//   const products = await getProducts()

//   return {
//     props: {
//       categories,
//       products
//     },
//   };
// };
