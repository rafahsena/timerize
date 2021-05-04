import { Box } from "@chakra-ui/layout";
import { useSession, signIn, signOut } from "next-auth/client";
import { databaseConnection, isConnected } from "../util/mongodb";

export type HomeProps = {
  isConnected: Boolean;
};

const Home: React.FC<HomeProps> = ({ isConnected }: HomeProps) => {
  const [session, loading] = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  await databaseConnection();
  return {
    props: { isConnected },
  };
}
