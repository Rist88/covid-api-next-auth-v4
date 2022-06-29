import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data } = useSession();
  if (data) {
    const { accessToken } = data;
    return <div>{`Access Token: ${accessToken}`}</div>;
  }
  return <div>Access Token is not exist</div>;
}
