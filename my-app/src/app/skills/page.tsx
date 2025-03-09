import {
  BackgroundImage,
  Box,
  Stack,
  Title,
  Text,
  Flex,
  Image,
  Center,
} from '@mantine/core';
import { allOutils, Outils } from '@/data/outils';
import NextImage from 'next/image';
import bg from '../../assets/dev.jpg';
import classes from "../../styles/skills.module.css";
import filter from "../../components/Filter.module.css"

export default function Page() {
  return (
    <>
      <BackgroundImage
        src={bg.src}
        className={`${classes.bgImage} ${filter.filter}`}
      >
        <Box className={classes.textBox}>
          <Title className={classes.title}>Maîtrise des technologies modernes et polyvalence</Title>
          <Text>
            Depuis mes débuts dans le développement web, j’ai acquis une solide
            maîtrise des technologies front-end et back-end
          </Text>
        </Box>
      </BackgroundImage>
      <Stack className={classes.stack}>
        {allOutils.map((outils, k) => (
          <Stack
            key={k}
            className={classes.outilsStack}
          >
            <Title order={2} className={classes.outilsTitle}>
              {outils.label}
            </Title>
            <Flex className={classes.flex}>
              {Object.values(outils.infos)
                .filter((value) => value.often)
                .map((value, k) => (
                  <Item item={value} key={k} />
                ))}
            </Flex>
          </Stack>
        ))}
      </Stack>
    </>
  );
}

const Item = ({ item }: { item: Outils }) => (
  <Stack className={classes.itemStack}>
    <Center>
      {item.logo && (
        <Image
          src={item.logo}
          className={classes.itemLogo}
          alt={`logo ${item.name}`}
          component={NextImage}
        />
      )}
    </Center>
    <Text className={classes.itemName}>{item.name}</Text>
  </Stack>
);
