import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetServerSidePropsResult, GetServerSidePropsContext } from "next";

type HelpProps = {
  helpRequest: number;
};

const Help = memo(({ helpRequest }: HelpProps) => {
  return (
    <>
      <AppHead title="Help" description="" />
      <div>Help</div>
      <div>{helpRequest}</div>
    </>
  );
});
Help.displayName = "Help";

export default Help;

export async function getServerSideProps({}: GetServerSidePropsContext<{}>): Promise<
  GetServerSidePropsResult<HelpProps>
> {
  const helpRequest = Math.random();
  return {
    props: {
      helpRequest,
    },
  };
}
