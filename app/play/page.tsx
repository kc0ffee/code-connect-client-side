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
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { Configuration, Theme, ThemeApi } from "@/api";
import { CodeDataContext } from "@/providers/code_data_context";

export default function Play() {
  // 表示するモーダルの一覧
  const ShowModal = {
    cancel: "cancel",
    submit: "submit",
  };

  const [theme, setTheme] = useState<Theme>({
    id: -1,
    theme: "Load failure",
  }); // manage theme
  const [language, setLanguage] = useState("go"); // 使用言語
  const [code, setCode] = useState(""); // 作成コード
  const [showModal, setShowModal] = useState(ShowModal.submit); // manage show modal
  const { isOpen, onOpen, onClose } = useDisclosure(); // manage modal status
  const CodeData = useContext(CodeDataContext); // コードをサーバーに送信した結果を表示する

  // テーマをAPIから取得するs
  const GetThemeAsync = async () => {
    const conf = new Configuration({
      basePath: process.env.NEXT_PUBLIC_API_THEME_URL,
    });
    await new ThemeApi(conf)
      .apiThemeGet()
      .then((res) => {
        setTheme(res);
        CodeData.themeId = res.id != undefined ? res.id : 0;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // キャンセル確認のポップアップを表示する
  const ShowCancelModal = () => {
    setShowModal(ShowModal.cancel);
    onOpen();
  };

  // 送信確認のポップアップを表示する
  const ShowSubmitModal = () => {
    setShowModal(ShowModal.submit);
    onOpen();
  };

  // テキストエリアが変更されたときのハンドラー
  const TextareaChangeHandler = (e: any) => {
    const value = e.target.value;
    setCode(value);
    CodeData.code = code;
  };

  const ChangeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  // Initialize
  useEffect(() => {
    GetThemeAsync();
    CodeData.language = language;
    CodeData.code = code;
  }, []);

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
            {theme?.theme}
          </Heading>
        </Center>
        <Center>
          <RadioGroup onChange={ChangeLanguage} value={language}>
            <Stack direction={"row"}>
              <Radio value="go" size="lg">
                Go
              </Radio>
              <Radio value="python" size="lg">
                Python
              </Radio>
            </Stack>
          </RadioGroup>
        </Center>
        <Center className="my-5">
          <Textarea
            placeholder="Write your code"
            value={code}
            height={"2xl"}
            onChange={TextareaChangeHandler}
          />
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
                  <Button colorScheme="blue">
                    <Link href={"/result"}>送信する</Link>
                  </Button>
                )}
              </ButtonGroup>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
