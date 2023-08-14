"use client";

import {
  Heading,
  Text,
  Center,
  Button,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { ReadyModal } from "@/components/modal";

export default function Home() {
  // モーダルの状態を管理するためのフック
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Createボタンが押されたときの処理
  const PressStartButton = (): void => {
    onOpen();
  };

  return (
    <>
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
          <Button
            colorScheme="blue"
            variant={"outline"}
            onClick={PressStartButton}
          >
            プレイ！
          </Button>
        </Center>
      </Container>
      <ReadyModal IsOpen={isOpen} OnClose={onClose} />
    </>
  );
}
