"use client";

import {
  Heading,
  Text,
  Center,
  ButtonGroup,
  Button,
  Container,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW={"3xl"}>
      <Center>
        <Heading as={"h1"} size={"3xl"}>
          Code Connect
        </Heading>
      </Center>
      <Center>
        <Text className="my-10" fontSize="2xl">
          Code
          Connectでは、指定されたお題に沿ってコードを書きます。コードを書き終わったらSubmitボタンを押してください！。
        </Text>
      </Center>
      <Center>
        <Text className="my-10" fontSize="2xl">
          Create
          Roomボタンからルームを作成してプレイすることができます。また、友人とプレイをする場合はJoin
          Roomから作成済みのルームに参加することができます。
        </Text>
      </Center>
      <Center>
        <ButtonGroup variant="outline" spacing={6}>
          <Button colorScheme="blue">Create Room</Button>
          <Button colorScheme="blue">Join Room</Button>
        </ButtonGroup>
      </Center>
    </Container>
  );
}
