import { IronSessionData, IronSessionOptions, sealData } from "iron-session";

export class CookieTestHandler {
  static async createSessionCookie(
    session: { admin: { isLoggedIn: boolean; id: string } },
    sessionOptions: IronSessionOptions,
  ): Promise<{ cookie: string }> {
    return {
      cookie: `${sessionOptions.cookieName}=${await sealData(
        session,
        sessionOptions,
      )}`,
    };
  }
}
