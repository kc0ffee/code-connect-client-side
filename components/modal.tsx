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

import { Input, Button, ButtonGroup } from "@chakra-ui/react";
import { Text, Divider } from "@chakra-ui/react";
import { ModalProps } from "@/types/modal";

// CreateRoomModalContent・JoinRoomModalContentはModalに表示するコンテンツを返す。
// Modalの表示・非表示は、呼び出し側のStateで管理するためここには書かない。

export const ReadyModal = (props: ModalProps) => {
  // ルームのIDを保存するState
  const [roomID, setRoomID] = useState("0000");

  // TODO: サーバーにルームの作成を要求する処理を非同期で呼び出す。
  // TODO: 作成したルームに参加する
  return (
    <Modal isOpen={props.IsOpen} onClose={props.OnClose}>
      <ModalOverlay />
      <ModalContent width={"3xl"}>
        <ModalHeader>Create Room</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody>
          <Text fontSize={"xl"}>Room IDは {roomID} です。</Text>
          <Text fontSize={"md"}>
            一緒にプレイしたい人にRoomIDを共有してください。
          </Text>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup variant="outline" spacing={6}>
            {/* TODO: 現在ホストがキャンセルボタンを押すとルームはそのままに閉じているが、ホストが画面を消した場合ルームが解散されるように変更する。 */}
            <Button colorScheme="red" onClick={props.OnClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Start</Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
