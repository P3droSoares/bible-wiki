import database from "@/infra/database";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

async function status(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // const response = await database.query({
  //   text: "SELECT 1 + 1;",
  // });

  // console.log(response.rows);

  return res.status(200).json({ message: "Que massa!" });
}

export default status;
