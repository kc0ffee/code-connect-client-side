"use client";

import { Center, Container, Heading, VStack } from "@chakra-ui/react";

export default function Result() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Center>
          <VStack spacing={"10"}>
            <Heading as={"h1"} size={"3xl"}>
              Code Connect
            </Heading>
            <Heading as={"h2"} fontSize={"2xl"}>
              ✨診断結果
            </Heading>
          </VStack>
        </Center>
      </Container>
    </>
  );
}
