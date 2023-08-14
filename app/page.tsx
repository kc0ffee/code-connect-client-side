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
            Connectのコード診断では、テーマに沿ってコードを書いてもらいます。書いてもらったコードからあなたのプログラミングタイプを診断します。
          </Text>
        </Center>
        <Center>
          <Text className="my-10" fontSize="2xl">
            "プレイ" ボタンからプレイを開始できます。あなたのタイプは一体…
          </Text>
        </Center>
        <Center>
          <Button colorScheme="blue" variant={"outline"} onClick={onOpen}>
            プレイ
          </Button>
        </Center>
      </Container>
      <ReadyModal IsOpen={isOpen} OnClose={onClose} />
    </>
  );
}
