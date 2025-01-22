
import { Box, Center, Flex, Image, Stack, Text, Title } from '@mantine/core';
import { allOutils, Outils } from '@/data/outils';
import NextImage from 'next/image';
import { GUTTER } from '@/components/const';

export default function Page() {

  return (
    <Box mx={GUTTER}>
      <Flex justify="space-between">
        <Title order={2} mb="xl">Hard Skills </Title>
        <Center>
          <ItemOften />
          <Text>Un point signifie une utilisation quotidienne</Text>
        </Center>
      </Flex>
      <Stack gap="xl" >
        {allOutils.map((outils, k) => (
          <Stack key={k} style={{ borderBottom: "1px solid gray" }} pb="xl" w="fit-content">
            <Title order={3} fs="italic">
              {outils.label}
            </Title>
            <Flex gap="lg" w="fit-content">
              {Object.values(outils.infos).map((value, k) => <Item item={value} key={k} />)}
            </Flex>
          </Stack>
        ))}

      </Stack>
    </Box>
  );
}

const ItemOften = () => (
  <Box style={{ borderRadius: "100px" }} bg="pink.1" w={10} h={10} mr="md" />

)

const Item = ({ item }: { item: Outils }) => (
  <Stack mx="md" gap="lg">
    <Center>
      {item.logo && (
        <Image
          src={item.logo}
          w={75}
          h={75}
          alt={`logo ${item.name}`}
          fit="contain"
          component={NextImage}
        />
      )}
    </Center>
    <Center>{item.often && (<ItemOften />)}<Text ta="center">{item.name}</Text>
    </Center>
  </Stack>
);
