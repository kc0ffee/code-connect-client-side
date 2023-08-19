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
          あなたのプログラミングタイプは{props.type}です。{typeDescription(props.type)}
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

const typeDescription = (type: string) => {
  switch (type) {
    case "analyst":
      return "深い見識と論理的思考を持ち、情報の精緻な解剖を行います。現実的で緻密なアプローチが特長です。";
    case "gatekeeper":
      return "豊かな経験と洞察力で、状況の異変を察知・監視します。安定と秩序の維持に尽力します。";
    case "diplomat":
      return "柔軟なコミュニケーション力で対話を奨励し、調和を築きます。交渉と協力の才を持っています。";
    case "artist":
      return "創造力溢れる発想で新たな世界を生み出し、感情を鮮やかに表現します。美と独創性を追求します。";
  }
}

const TypeImage = (type: string) => {
  switch (type) {
    case "analyst":
      return {src: "/vercel.png"};
    case "gatekeeper":
      return {src: "/gatekeeper.png"};
    case "diplomat":
      return {src: "/diplomat.png"};
    case "artist":
      return {src: "/artist.png"};
  }
}
