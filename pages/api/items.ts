import PostContact from "@/api/postContact";
import { NextApiRequest, NextApiResponse } from "next";

async function items(request: NextApiRequest, response: NextApiResponse) {
  let method = request.method ? request.method.toLowerCase() : request.method;

  switch (method) {
    case "get": {
      return response.status(200).json({ method: "GET" });
    }
    case "post": {
      const body = JSON.parse(request.body);
      const id = await PostContact(body);
      return response.status(200).json({ id });
    }

    default: {
      return response.status(404).send("some things went wrong!!!");
    }
  }
}

export default items;
