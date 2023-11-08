import React, {useState, useMemo} from "react";
import { Text,SafeAreaView, ScrollView, HStack, Center} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCard";
import datas from "../datas";


const Kategori = () => {
  const [category, setCategory] = useState('NONE');
    const [isActive, setIsActive] = useState(false);

    const filteredList = useMemo(
        () => {
            if (category === 'NONE') return datas
            return datas.filter(item => category === item.kategori)
        },
        [category, datas]
    )

    const onClick = (category) => () => {
        setCategory(category)
        setIsActive(true);
    }
  // Get the params
  return (
    <ScrollView>
      <ScrollView>
      <HStack p={2} justifyContent={"space-between"} space={4}>
                    <TouchableOpacity onPress={onClick("NONE")}>
                        <Center backgroundColor={isActive ? "primary.500" : "amber.100"} height={10} p={2} borderRadius={8}>
                            <Text color={"white"}>All</Text>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick("Sayur Hijau")}>
                        <Center backgroundColor={isActive ? "primary.500" : "amber.100"} height={10} p={2} borderRadius={8}>
                            <Text color={"white"}>Gula</Text>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick("kakao")}>
                        <Center backgroundColor={isActive ? "primary.500" : "amber.100"} height={10} p={2} borderRadius={8}>
                            <Text color={"white"}>Kakao</Text>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick("jamur")}>
                        <Center backgroundColor={isActive ? "primary.500" : "amber.100"} height={10} p={2} borderRadius={8}>
                            <Text color={"white"}>Jamur</Text>
                        </Center>
                    </TouchableOpacity>
                </HStack>
                {/* <Button title="Clear" onPress={onClick('NONE')} />
                <Button title="Status 1" onPress={onClick("gula")} color={"white"} />
                <Button title="Status 2" onPress={onClick("kakao")} />
                <Button title="Status 3" onPress={onClick(3)} /> */}
                <HStack flexWrap={'wrap'} justifyContent={'space-between'}>
                    {filteredList.map((item) => {
                        return (
                            <ProductCard item={item} key={item.id} />
                        )
                    })}
                </HStack>

      

      </ScrollView>
    </ScrollView>
  );
};

export default Kategori;