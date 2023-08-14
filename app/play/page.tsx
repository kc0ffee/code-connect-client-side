"use client";

import {
  ButtonGroup,
  Button,
  Center,
  Container,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Play() {
  // プログラミンテーマを管理するためのState
  const [theme, setTheme] = useState("プログラム テーマ");

  return (
    <>
      <Container maxW={"3xl"}>
        <Center>
          <Heading as={"h1"} size={"3xl"}>
            Code Connect
          </Heading>
        </Center>
        <Center className="my-10">
          <Heading as={"h2"} fontSize={"2xl"}>
            {theme}
          </Heading>
        </Center>
        <Center>
          <Textarea placeholder="Write your code" height={"2xl"} />
        </Center>
        <Center>
          <ButtonGroup variant={"outline"} className="my-10" spacing={"10"}>
            <Button variant={"outline"} colorScheme="red" size={"lg"}>
              やめる
            </Button>
            <Button variant={"outline"} colorScheme="blue" size={"lg"}>
              送信する
            </Button>
          </ButtonGroup>
        </Center>
      </Container>
    </>
  );
}
