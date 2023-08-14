"use client";

import {
  Heading,
  Text,
  Center,
  ButtonGroup,
  Button,
  Container,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const ModalMode = {
  create: "create",
  join: "join",
};

export default function Home() {
  // モーダルの状態を管理するためのフック
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mode, setMode] = useState(ModalMode.create);

  // Createボタンが押されたときの処理
  const CreateButtonPress = (): void => {
    setMode(ModalMode.create);
    onOpen();
  };

  // Joinボタンが押されたときの処理
  const JoinButtonPress = (): void => {
    setMode(ModalMode.join);
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
          <ButtonGroup variant="outline" spacing={6}>
            <Button colorScheme="blue" onClick={CreateButtonPress}>
              Create Room
            </Button>
            <Button colorScheme="blue" onClick={JoinButtonPress}>
              Join Room
            </Button>
          </ButtonGroup>
        </Center>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {mode === ModalMode.create ? "Create" : "Join"}
        </ModalContent>
      </Modal>
    </>
  );
}
