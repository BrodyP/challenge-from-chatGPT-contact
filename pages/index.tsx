import { FIREBASE_URL } from "@/api/constant";
import { ItemId } from "@/api/types";
import ContactItem from "@/components/ui/contact-item";
import { GetServerSideProps } from "next";
import { Fragment } from "react";

interface MainProps {
  items: Array<ItemId>;
}

export default function Home(props: MainProps) {
  return (
    <Fragment>
      <h1>All Contact</h1>
      <div>
        {props.items.map((item) => (
          <ContactItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            email={item.email}
          />
        ))}
      </div>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const fetchData = await fetch(FIREBASE_URL);
  const json = await fetchData.json();
  const allItem: MainProps = { items: [] };

  for (const key in json) {
    allItem.items.push({ id: key, ...json[key] });
  }

  return { props: allItem };
};
