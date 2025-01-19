"use client"
import { Box, Button, Flex, Image, Stack, Text, Title, ImageProps } from "@mantine/core";
import NextImage from 'next/image';
import placeholder from "../assets/placeholder.svg"
import handymoov from "../assets/logo handymoov 1.png"
import soki from "../assets/soki.svg"
import { useHover } from "@mantine/hooks";
import Link from "next/link";
import meufDeterre from "../assets/projects/meufDeterre/Logo from Google Drive.png"
import sihmati from "../assets/projects/sihmati/Logotype.svg"

const picture: ImageProps[] = [

  {
    w: 162.01,
    h: 159.44,
    right: 353.92,
    top: 98.12,
    src: handymoov,
  },
  {
    w: 138.33,
    h: 136.14,
    right: 0,
    top: 266.14,
    src: soki
  },
  {
    w: 208.12,
    h: 204.82,
    right: 82.25,
    top: 0,
    src: meufDeterre
  },
  {
    w: 184.44,
    h: 181.52,
    right: 213.1,
    top: 300.48,
    src: sihmati,
  },
];


export default function Home() {
  return (
    <Box mx="xl" h="100%">
      <Flex gap="xl" justify="space-between" align='center'  >
        <Stack maw={450} h="100%"  >
          <Title order={1} fs="italic" c="yellow" fz={50} fw={900}>Hello !</Title>
          <Text size="lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aliquam corrupti. Sit facilis ea eius autem consequatur necessitatibus ducimus libero possimus consectetur! Sit ad sunt hic animi non perferendis cupiditate.
          </Text>
          <Flex gap="md" >
            <Link href="/curriculum-vitae">
              <Button size="lg">Mon CV</Button>
            </Link>
            <Link href="/curriculum-vitae">

              <Button size="lg">Me contacter</Button>
            </Link>

          </Flex>
        </Stack>
        <Box pos="relative" w={515.93} h={482}>
          {picture.map((pic, index) =>
            <Picture key={index} {...pic} />
          )}
        </Box>
      </Flex>
    </Box >
  );
}


const Picture = ({ ...props }: ImageProps) => {
  const { hovered, ref } = useHover();
  return (
    <Box
      pos="absolute"
      style={(theme) => ({
        overflow: "hidden",
        borderRadius: theme.radius.lg

      })}
      {...props}
    >

      <Image ref={ref} src={placeholder} alt="" fit="contain" component={NextImage} radius="lg" style={{
        transform: hovered ? "scale(1.2)" : "none",
        transition: "transform 0.3s ease, border-color 0.3s ease"

      }} {...props} />
    </Box>

  )
}