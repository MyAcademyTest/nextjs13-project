// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from "iron-session";

import { AdminSession } from "@/models/server/AdminSession";
import { UserSession } from "@/models/server/UserSession";

export const adminSessionOptions: IronSessionOptions = {
  password: process.env.ADMIN_SECRET_COOKIE_PASSWORD as string,
  cookieName: "nextjs13-project-admin-cookie-auth",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export const userSessionOptions: IronSessionOptions = {
  password: process.env.USER_SECRET_COOKIE_PASSWORD as string,
  cookieName: "nextjs13-project-user-cookie-auth",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    admin?: AdminSession;
    user?: UserSession;
  }
}
