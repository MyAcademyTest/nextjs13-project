import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { userSessionOptions } from "@/lib/session";

type UsersListProps = {};

const UsersList = memo(({}: UsersListProps) => {
  return (
    <>
      <AppHead title="UsersList" description="" />
    </>
  );
});
UsersList.displayName = "UsersList";

export default UsersList;

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({
    req: { session, cookies, headers },
  }: GetServerSidePropsContext<{}>): Promise<
    GetServerSidePropsResult<UsersListProps>
  > {
    return {
      props: {},
    };
  },
  userSessionOptions,
);
