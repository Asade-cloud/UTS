import { Heading, Image, Text, HStack } from "native-base";
import { Box, ScrollView, View, Input, } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import datas from "../datas";

const Home = () => {


  const navigation = useNavigation();

  return (
    <>
      <ScrollView>
        <Box
          w="full"
          h="300"
          borderColor="coolGray.600"
          borderWidth="1"
          rounded="lg"
          borderRadius="30"
          padding="30"
          backgroundColor="black"

        >
          <Box alignItems="center"
            marginTop="180"
          >
            <Input mx="3" placeholder="Input" w="100%" />
          </Box>
        </Box>
        <HStack p={3} justifyContent={"space-between"}>
          <Heading>Bumbu Dapur</Heading>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Kategori")
            }
          >
            <Text fontSize="15" color="amber.500"> Lihat Semua</Text>
          </TouchableOpacity>
        </HStack>
        <Box py={"4"}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {datas.filter
              ((category) => category.kategori == "Bumbu Dapur")

              .map((category, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={index}
                    onPress={() =>
                      navigation.navigate("Produkdetail", { category: category })
                    }
                  >
                    <Box borderWidth={"1"} rounded={20} shadow={5} p={3} w={"48"} mr={"4"} ml={index == 0 ? "4" : "0"}>
                      <Image
                        source={{ uri: category.image }}
                        w="full"
                        h="24"
                        alt="Image Data"
                        mb={"2"}
                        rounded={20}
                      />
                      <Text fontSize={"xs"}>
                        Rp.
                        {category.harga}
                      </Text>
                      <Heading
                        fontSize={"sm"}
                        lineHeight={"xs"}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                      >
                        {category.nama}
                      </Heading>
                    </Box>

                  </TouchableOpacity>

                );
              })}
          </ScrollView>



        </Box>

        <HStack p={3} justifyContent={"space-between"}>
          <Heading>Sayur Hijau</Heading>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Kategori")
            }
          >
            <Text fontSize="15" color="amber.500"> Lihat Semua</Text>
          </TouchableOpacity>
        </HStack>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("Sayur", { category: category })
              }
            >
            </TouchableOpacity>

        <Box py={"4"} >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {datas.filter
              ((category) => category.kategori == "Sayur Hijau")

              .map((category, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={index}
                    onPress={() =>
                      navigation.navigate("Produkdetail", { category: category })
                    }
                  >
                    <Box borderWidth={"1"} rounded={20} shadow={5} p={3} w={"48"} mr={"4"} ml={index == 0 ? "4" : "0"}>
                      <Image
                        source={{ uri: category.image }}
                        w="full"
                        h="24"
                        alt="Image Data"
                        mb={"2"}
                        rounded={20}
                      />
                      <Text fontSize={"xs"}>
                        Rp.
                        {category.harga}
                      </Text>
                      <Heading
                        fontSize={"sm"}
                        lineHeight={"xs"}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                      >
                        {category.nama}
                      </Heading>
                    </Box>

                  </TouchableOpacity>

                );
              })}
          </ScrollView>


        </Box>
      </ScrollView>

    </>
  );
};

export default Home;