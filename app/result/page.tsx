"use client";

import { CodeApi, CodeResponse, Configuration, Score } from "@/api";
import { ResultRadarChart } from "@/components/radar";
import { CodeDataContext } from "@/providers/code_data_context";
import { Center, Container, Heading, VStack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

export default function Result() {
  const CodeData = useContext(CodeDataContext);

  const [score, setScore] = useState<Score>({
    yourType: "",
    typeDescription: "",
    codeLine: 0,
    tokenLen: 0,
    tokenCount: 0,
    functionLen: 0,
  });

  const GetResult = async () => {
    const send_cnf = new Configuration({
      basePath: process.env.NEXT_PUBLIC_API_CODE_URL,
    });

    await new CodeApi(send_cnf)
      .apiCodePost({
        postBody: {
          themeId: CodeData.themeId,
          language: CodeData.language,
          code: Buffer.from(CodeData.code).toString("base64"),
        },
      })
      .then((res) => {
        SetResult(res.id != undefined ? res.id : 0);
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const SetResult = (id: number) => {
    const conf = new Configuration({
      basePath: process.env.NEXT_PUBLIC_API_RESULT_URL,
    });
    new CodeApi(conf)
      .apiResultGet({
        id: id,
      })
      .then((res) => {
        console.log(res);
        setScore(() => {
          return res;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const init = async () => {
    await GetResult();
  };

  useEffect(() => {
    init();
  }, []);

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
            <Text className="my-10" fontSize="2xl">
              あなたのタイプは、
              {score.yourType != undefined ? score.yourType : "[Your Type]"}です
            </Text>
            <ResultRadarChart
              line_count={score.codeLine != undefined ? score.codeLine : 0}
              token_count={score.tokenCount != undefined ? score.tokenCount : 0}
              token_length={score.tokenLen != undefined ? score.tokenLen : 0}
              function_len={
                score.functionLen != undefined ? score.functionLen : 0
              }
            />
          </VStack>
        </Center>
      </Container>
    </>
  );
}
