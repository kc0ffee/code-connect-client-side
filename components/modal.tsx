import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text, Divider } from "@chakra-ui/react";
import { ModalProps } from "@/types/modal";
import Link from "next/link";

// CreateRoomModalContent・JoinRoomModalContentはModalに表示するコンテンツを返す。
// Modalの表示・非表示は、呼び出し側のStateで管理するためここには書かない。

export const ReadyModal = (props: ModalProps) => {
  // TODO: サーバーにルームの作成を要求する処理を非同期で呼び出す。
  return (
    <Modal isOpen={props.IsOpen} onClose={props.OnClose}>
      <ModalOverlay />
      <ModalContent width={"3xl"}>
        <ModalHeader>プログラミング タイプ診断</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody>
          <Text fontSize={"md"}>プログラミングタイプの診断を始めますか？</Text>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup variant="outline" spacing={6}>
            <Button colorScheme="red" onClick={props.OnClose}>
              やめる
            </Button>
            <Button colorScheme="blue">
              <Link href={"/play"}>始める</Link>
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
