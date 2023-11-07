import { Heading, Center, Text } from "native-base";
import { Header } from "../components";

const Sayur = ({ route }) => {
  // Get the params
  const params = route.params.category;
  return (
    <>
      <Center flex={1} p={"4"}>
        <Heading>pawlwp</Heading>
        <Text textAlign={"center"}>{params.id}</Text>
      </Center>
    </>
  );
};

export default Sayur;