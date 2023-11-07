import React from "react";
import { View, Text, Center } from "native-base";

const Kategori = ({route}) => {
  const params = route.params.kategori;
    return (
      <>
        <Center flex={1} p={"4"}>
          <Text textAlign={"center"}>Kontol{params}</Text>
        </Center>
      </>
    );
  };
  
   
export default Kategori;