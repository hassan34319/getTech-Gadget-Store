import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
type Data = {
  vendors: Vendor[]; //Category Type is created in typings.d.ts. Due to that file name we do not need to import or export that file.
};

const query = groq`*[_type == "vendors"] { _id,... }`;
export default async function handler(
  req: NextApiRequest, //Request TYPE
  res: NextApiResponse<Data> //RESPINSE TYPE OF DATA TYPE THAT WE DEFINED ABOVE
) {
  const vendors = await sanityClient.fetch(query);

  res.status(200).json({vendors})
} 


