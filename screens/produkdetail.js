import { Heading, Center, Text, ScrollView, Box, Image, VStack, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Footerbutton from "../components/Footerbutton";
const Produkdetail = ({ route }) => {
  // Get the params
  const params = route.params.category;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Box>
          <Center>
            <Image source={{ uri: params.image }}
              w="full"
              h="300"
              alt="imgproduk"
            />
          </Center>
        </Box>
        <VStack p={3}>
          <Heading size={"lg"}>{params.nama}</Heading>
          <Heading fontSize="12" color="gray.400" >Harga/1kg</Heading>
          <Heading size={"md"} color={"amber.500"}>Rp.{params.harga}</Heading>
        </VStack>
        <VStack p={3}>
          <Box>
            <Heading size={"sm"}>Deskripsi</Heading>
            <Text>{params.deskripsi}</Text>
          </Box>
        </VStack>

      </ScrollView>
      <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
        <Footerbutton />
      </View>
    </SafeAreaView>


  );
};

export default Produkdetail;