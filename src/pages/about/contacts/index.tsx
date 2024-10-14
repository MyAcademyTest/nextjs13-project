import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";

type ContactsProps = {
  contacts: {
    email: string;
    phone: string;
  };
};

const Contacts = memo(({ contacts }: ContactsProps) => {
  return (
    <>
      <AppHead title="Contacts" description="" />
      <div>Contacts</div>
      <div>{contacts.email}</div>
      <div>{contacts.phone}</div>
    </>
  );
});
Contacts.displayName = "Contacts";

export default Contacts;

export async function getStaticProps({}: GetStaticPropsContext<{}>): Promise<
  GetStaticPropsResult<ContactsProps>
> {
  const contacts = {
    email: "test@test.com",
    phone: "1234567890" + Math.random(),
  };
  return {
    props: {
      contacts,
    },
  };
}
