import { Heading, Center, Text, ScrollView, Box, Image, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Footerbutton from "../components/Footerbutton";
const Produkdetail = ({ route }) => {
  // Get the params
  const params = route.params.category;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <Box
            backgroundColor="primary.400"
            w="full"
            h="40"
            >

            </Box>
        <VStack p={3}>
          <Heading size={"lg"}>{params.nama}</Heading>
          <Heading size={"sm"} >Harga/1kg</Heading>
          <Heading size={"md"} color={"amber.500"}>Rp.{params.harga}</Heading>
          <Box 
          borderWidth="1" marginTop="5"
          ></Box>
        </VStack>
        <VStack p={3}>
        <Box>
            <Heading size={"sm"}>Deskripsi</Heading>
            <Text>{params.title}</Text>
          </Box>
          <Footerbutton></Footerbutton>
        </VStack>
       

      </ScrollView>
    </SafeAreaView>
    
       
  );
};

export default Produkdetail;