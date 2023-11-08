import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading, Image, VStack, Text } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ item }) => {
    const navigation = useNavigation();
    console.log("item: ", item)
    return (
        <TouchableOpacity>
            <Box height={150} width={190} p={2}>
                <Image
                    source={{ uri: item.image }}
                    height="100%"
                    width="100%"
                    alt='product'
                    borderRadius={15}
                />
                <HStack space={2} alignItems={"center"} justifyContent={"space-between"}>
                    <VStack space={2} >
                        
                    </VStack>
                </HStack>
            </Box>
        </TouchableOpacity>
    )
}

export default ProductCard