import { FIREBASE_URL } from "./constant";
import { Item } from "./types";

async function PostContact(item: Item): Promise<string> {
  const fetchData = await fetch(FIREBASE_URL, {
    method: "POST",
    body: JSON.stringify(item),
  });

  const response = await fetchData.json();

  return response.name;
}

export default PostContact;
