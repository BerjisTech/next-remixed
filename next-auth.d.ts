import { ProzUser } from "@/interfaces/account";
import "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends ProzUser {
    access_token: string;
    refresh_token: string;
    expires_on: number;
    can_edit: boolean;
    exp: number;
    iat: number;
    jti: string;
  }

  interface Session extends DefaultSession {
    user: ProzUser;
    expires_in: string;
    error: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: ProzUser;
  }
}
