import { Card, CardBody, Heading, Text, Stack, Image } from "@chakra-ui/react";

export const TypeResult = (props: { type: string }) => {
return (
  <Card
    direction={{ base: "column", sm: "row" }}
    variant='outline'
    borderColor={TypeColor(props.type)}
    borderWidth="2px"
    mb={3}
    p={5}
  >
    <Image 
      objectFit="fill"
      boxSize="250px"
      src={TypeImage(props.type)?.src}
      alt="Next.js logo"
      fallback={<Text boxSize="250px">画像が読み込めません</Text>}
      mr={5}
    />
    <Stack borderLeftWidth={2}>
      <CardBody>
        <Heading size="3xl" color={TypeColor(props.type)}>
          {props.type}
        </Heading>
        <Text py="2">
          あなたのプログラミングタイプは{props.type}です。説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加説明を追加
        </Text>
      </CardBody>
    </Stack>
  </Card>
    );
}

const TypeColor = (type: string) => {
    switch (type) {
        case "analyst":
            return "#3498db";
        case "gatekeeper":
            return "#27ae60";
        case "diplomat":
            return "#e67e22";
        case "artist":
            return "#d35400";
    }
}

const TypeImage = (type: string) => {
    switch (type) {
        case "analyst":
            return {src: "/vercel.svg"};
        case "gatekeeper":
            return {src: "/gatekeeper.svg"};
        case "diplomat":
            return {src: "/diplomat.svg"};
        case "artist":
            return {src: "/artist.svg"};
    }
}