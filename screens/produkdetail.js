import { Heading, Center, Text, ScrollView, Box, Image } from "native-base";

const Produkdetail = ({ route }) => {
  // Get the params
  const params = route.params.category;
  return (
    <>
    <ScrollView>
      <Box
      backgroundColor="black"
      w="full"
      h="300"
      rounded="55"
      >
      </Box>
      <Box
      background="primary.50"
      w="full"
      marginLeft="5"
      marginTop="5"
      >
          <Text
          fontSize="30"
          >{params.nama}
          </Text>
        <Text
        textAlign="left"
        fontSize="10"
        >Harga/1kg</Text>
          <Text
        textAlign="left"
        color="secondary.700"
        fontSize="20"
        >Rp.{params.harga}</Text>
    </Box>
    </ScrollView>
       
    </>
  );
};

export default Produkdetail;