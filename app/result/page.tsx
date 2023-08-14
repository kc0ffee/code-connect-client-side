"use client";

import { ResultRadarChart } from "@/components/radar";
import { Center, Container, HStack, Heading, VStack } from "@chakra-ui/react";

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
            <ResultRadarChart
              line_count={10}
              indent_size={10}
              token_count={10}
              token_length={10}
              function_count={10}
            />
          </VStack>
        </Center>
      </Container>
    </>
  );
}
