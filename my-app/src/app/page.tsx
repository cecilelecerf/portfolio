"use client"
import { Box, Button, Flex, Image, Stack, Text, Title, ImageProps } from "@mantine/core";
import NextImage from 'next/image';
import placeholder from "../assets/placeholder.svg"
import { useHover } from "@mantine/hooks";

const picture: ImageProps[] = [
  {
    w: 208.12,
    h: 204.82,
    right: 82.25,
    top: 0,
    bg: "blue",
  },
  {
    w: 162.01,
    h: 159.44,
    right: 353.92,
    top: 98.12,
    bg: "red",
  },
  {
    w: 138.33,
    h: 136.14,
    right: 0,
    top: 266.14,
    bg: "purple",
  },
  {
    w: 184.44,
    h: 181.52,
    right: 213.1,
    top: 300.48,
    bg: "yellow",
  },
];


export default function Home() {
  return (
    <Box mx="xl" h="100%">
      <Flex gap="xl" justify="space-between" align='center'  >
        <Stack maw={450} h="100%"  >
          <Title fs="italic">Hello !</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aliquam corrupti. Sit facilis ea eius autem consequatur necessitatibus ducimus libero possimus consectetur! Sit ad sunt hic animi non perferendis cupiditate.
          </Text>
          <Flex gap="md" >
            <Button>Mon CV</Button>
            <Button>Me contacter</Button>
          </Flex>
        </Stack>
        <Box pos="relative" w={515.93} h={482}>
          {picture.map((pic) =>
            <Picture {...pic} />
          )}
          {/* <Image w={208.12} h={204.82} bg="blue" pos="absolute" right={82.25} top={0} radius="lg" />
          <Image w={162.01} h={159.44} bg="red" pos="absolute" right={353.92} top={98.12} radius="lg" />
          <Image w={138.33} h={136.14} bg="purple" pos="absolute" right={0} top={266.14} radius="lg" />
          <Image w={184.44} h={181.52} bg="yellow" pos="absolute" right={213.1} top={300.48} radius="lg" /> */}
        </Box>
      </Flex>
    </Box >
  );
}


const Picture = ({ ...props }: ImageProps) => {
  const { hovered, ref } = useHover();
  console.log(hovered)
  return (
    <Box
      pos="absolute"
      style={(theme) => ({
        overflow: "hidden",
        borderRadius: theme.radius.lg

      })}
      {...props}
    >

      <Image ref={ref} src={placeholder} alt="" component={NextImage} radius="lg" style={{
        transform: hovered ? "scale(1.2)" : "none",
        transition: "transform 0.3s ease, border-color 0.3s ease"

      }} {...props} />
    </Box>

  )
}