import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
type Data = {
  productsByCategory : Product[] | Product | undefined,
  Category_title : String //Category Type is created in typings.d.ts. Due to that file name we do not need to import or export that file.
};

;
export default async function handler(
  req: NextApiRequest, //Request TYPE
  res: NextApiResponse<Data> //RESPINSE TYPE OF DATA TYPE THAT WE DEFINED ABOVE
) {
    const params = req.query.categoryId
    const query_products = groq`*[_type == "product" && category._ref == "${params}"]  {
        _id,
          ...
      }`
    const query_category = groq`*[_type == "category" && _id == "${params}"] {
        _id,
        title
      }`
  const productsByCategory = await sanityClient.fetch(query_products);
  const Category_title = await sanityClient.fetch(query_category)

  res.status(200).json({productsByCategory ,Category_title})
}