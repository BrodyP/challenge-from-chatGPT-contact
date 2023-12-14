import { getUrlOneContact } from "@/api/constant";
import { ItemId } from "@/api/types";
import ContactItem from "@/components/ui/contact-item";
import { GetServerSideProps } from "next";
import { Fragment } from "react";

function ContactIdPage(props: ItemId) {
  return (
    <Fragment>
      <ContactItem
        id={props.id}
        email={props.email}
        name={props.name}
        description={props.description}
      />
    </Fragment>
  );
}

export default ContactIdPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  if (!id) {
    return {
      props: {},
      redirect: "/404",
    };
  }
  const fetchData = await fetch(getUrlOneContact(String(id)));
  const json = await fetchData.json();
  return { props: { ...json, id } };
};
