"use client";

import {
  ButtonGroup,
  Button,
  Center,
  Container,
  Heading,
  Textarea,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function Play() {
  // 表示するモーダルの一覧
  const ShowModal = {
    cancel: "cancel",
    submit: "submit",
  };

  const [theme, setTheme] = useState("プログラム テーマ");
  const [showModal, setShowModal] = useState(ShowModal.submit);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const ShowCancelModal = () => {
    setShowModal(ShowModal.cancel);
    onOpen();
  };
  const ShowSubmitModal = () => {
    setShowModal(ShowModal.submit);
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
            <Button
              variant={"outline"}
              colorScheme="red"
              size={"lg"}
              onClick={ShowCancelModal}
            >
              やめる
            </Button>
            <Button
              variant={"outline"}
              colorScheme="blue"
              size={"lg"}
              onClick={ShowSubmitModal}
            >
              送信する
            </Button>
          </ButtonGroup>
        </Center>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            {showModal == ShowModal.cancel
              ? "キャンセルしますか?"
              : "回答を確定しますか?"}
          </ModalHeader>
          <ModalBody>
            {showModal == ShowModal.cancel
              ? "ここで行った編集はすべて破棄されます。"
              : "送信後に回答を変更することはできません"}
          </ModalBody>
          <ModalFooter>
            <Center>
              <ButtonGroup variant={"outline"} spacing={"10"}>
                <Button colorScheme="red" onClick={onClose}>
                  キャンセル
                </Button>
                {showModal == ShowModal.cancel ? (
                  <Button colorScheme="blue">
                    <Link href={"/"}> 回答をやめる</Link>
                  </Button>
                ) : (
                  <Button colorScheme="blue">送信する</Button>
                )}
              </ButtonGroup>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
