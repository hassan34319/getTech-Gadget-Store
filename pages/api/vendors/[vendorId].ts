import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
type Data = {
  productsByVendors : Product[] | Product | undefined,
  vendor_image : [{
    _id : String,
    image : Image[],
    title : String
  }]  //Category Type is created in typings.d.ts. Due to that file name we do not need to import or export that file.
};

;
export default async function handler(
  req: NextApiRequest, //Request TYPE
  res: NextApiResponse<Data> //RESPINSE TYPE OF DATA TYPE THAT WE DEFINED ABOVE
) {
    const params = req.query.vendorId
    const query_products = groq`*[_type == "product" && vendor._ref == "${params}"]  {
        _id,
          ...
      }`
    const query_vendor = groq`*[_type == "vendors" && _id == "${params}"] {
        _id,
        title,
        image
      }`
  const productsByVendors = await sanityClient.fetch(query_products);
  const vendor_image = await sanityClient.fetch(query_vendor)

  res.status(200).json({productsByVendors ,vendor_image})
    }