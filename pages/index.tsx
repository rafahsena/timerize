import { Box } from "@chakra-ui/layout";
import { databaseConnection, isConnected } from "../util/mongodb";

export type HomeProps = {
  isConnected: Boolean;
};

const Home: React.FC<HomeProps> = ({ isConnected }: HomeProps) => {
  return <Box></Box>;
};

export default Home;

export async function getServerSideProps() {
  await databaseConnection();
  return {
    props: { isConnected },
  };
}
