import React, {useState, useMemo} from "react";
import { Text, ScrollView, HStack, Center} from "native-base";
import { TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCard";
import datas from "../datas";


const Kategori = () => {
  const [category, setCategory] = useState('NONE');

    const filteredList = useMemo(
        () => {
            if (category === 'NONE') return datas
            return datas.filter(item => category === item.kategori)
        },
        [category, datas]
    )

    const onClick = (category) => () => {
        setCategory(category)
    }
  // Get the params
  return (
    <ScrollView>
      <HStack p={2} justifyContent={"space-between"} space={2}>
                    <TouchableOpacity onPress={onClick("NONE")}>
                    <Center backgroundColor={"amber.500"} height={10} p={2} borderRadius={8} shadow={3}>
                            <Text color={"white"}>Semua</Text>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick("Sayur Hijau")}>
                    <Center backgroundColor={"amber.500"} height={10} p={2} borderRadius={8} shadow={3}>
                            <Text color={"white"}>Sayur Hijau</Text>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick("Bumbu Dapur")}>
                        <Center backgroundColor={"amber.500"} height={10} p={2} borderRadius={8} shadow={3}>
                            <Text color={"white"}>Bumbu Dapur</Text>
                        </Center>
                    </TouchableOpacity>
                    
                </HStack>
                <HStack flexWrap={'wrap'} justifyContent={'space-between'} p={3}>
                    {filteredList.map((category) => {
                        return (
                            <ProductCard category={category} key={category.id} />
                        )
                    })}
                </HStack>
    </ScrollView>
  );
};

export default Kategori;