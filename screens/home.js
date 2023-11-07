import { Heading, Image, Text, FlatList } from "native-base";
import { Box, ScrollView, View, Input } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import datas from "../datas";

const Home = () => {


  const navigation = useNavigation();
const fruits = [""];
fruits.push("Kiwi");
  return (
    <>
    <ScrollView>
      <Box
            w="full"
            h="300" 
            borderColor= "coolGray.600"
            borderWidth="1"
            rounded="lg"
            borderRadius="30"
            padding="30"
            backgroundColor="black"
           >
            <Box alignItems="center"
            marginTop="150"
            >
              
      <Input mx="3" placeholder="Input" w="100%" />
    </Box>
          </Box>
          <View style={{
        padding:16,
     }}>
        <View
            style={{
                padding: 16,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
            }}>
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight:'500',
                        letterSpacing:1,
                    }}>
                    Produk
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight:'400',
                        opacity:0.5,
                        marginLeft:10,
                        }}>
                    41
                </Text>
                </View>
                
                <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate("Kategori", (fruits ))
                }
              >
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight:'400',
                        }}>
                    Semua
                </Text>
                </TouchableOpacity>
                
            </View>
            </View>
            
                
                

      <Box py={"4"} bg="red.700">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {datas.filter
          ((category)=> category.date == "10 Oktober 2023")
          
          .map((category, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                onPress={() =>
                  navigation.navigate("Produkdetail", {category: category})
                }
              >
                <Box w={"48"} mr={"4"} ml={index == 0 ? "4" : "0"}>
                  <Image
                    source={{ uri: category.image }}
                    w="full"
                    h="24"
                    alt="Image Data"
                    mb={"2"}
                  />
                  <Text fontSize={"xs"} color="light.300">
                    {category.date}
                  </Text>
                  <Heading
                    fontSize={"sm"}
                    lineHeight={"xs"}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    color="light.50"
                  >
                    {category.title}
                  </Heading>
                </Box>
                
              </TouchableOpacity>
          
            );
          })}
        </ScrollView>
        
        
      </Box>
      
      <View style={{
        padding:16,
     }}>
        <View
            style={{
                padding: 16,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
            }}>
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight:'500',
                        letterSpacing:1,
                    }}>
                    Produk
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight:'400',
                        opacity:0.5,
                        marginLeft:10,
                        }}>
                    41
                </Text>
                </View>
                
                <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate("Sayur", {category: category})
                }
              >
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight:'400',
                        }}>
                    Semuaa
                </Text>
                </TouchableOpacity>
                
            </View>
            </View>
            <Box py={"4"} bg="red.700">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {datas.filter
          ((category)=> category.date == "Oktober2022")
          
          .map((category, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                onPress={() =>
                  navigation.navigate("News Detail", {category: category})
                }
              >
                <Box w={"48"} mr={"4"} ml={index == 0 ? "4" : "0"}>
                  <Image
                    source={{ uri: category.image }}
                    w="full"
                    h="24"
                    alt="Image Data"
                    mb={"2"}
                  />
                  <Text fontSize={"xs"} color="light.300">
                    {category.date}
                  </Text>
                  <Heading
                    fontSize={"sm"}
                    lineHeight={"xs"}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    color="light.50"
                  >
                    {category.title}
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