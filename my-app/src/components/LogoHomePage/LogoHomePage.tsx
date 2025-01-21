import { Box, Flex, Image, ImageProps } from '@mantine/core';
import NextImage from 'next/image';
import placeholder from '../../assets/placeholder.svg';
import handymoov from '../../assets/logo handymoov 1.png';
import soki from '../../assets/soki.svg';
import { useHover, useMediaQuery } from '@mantine/hooks';
import meufDeterre from '../../assets/projects/meufDeterre/Logo from Google Drive.png';
import sihmati from '../../assets/projects/sihmati/Logotype.svg';
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
    src: soki,
  },
  {
    w: 208.12,
    h: 204.82,
    right: 82.25,
    top: 0,
    src: meufDeterre,
  },
  {
    w: 184.44,
    h: 181.52,
    right: 213.1,
    top: 300.48,
    src: sihmati,
  },
];
export const LogoHomePage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  if (isSmallScreen)
    return (
      <Flex justify="center" w="100%" gap="xl" wrap="wrap" mt="xl">
        {picture.map((pic, index) => (
          <Image
            key={index}
            src={pic.src}
            alt=""
            component={NextImage}
            w={90}
            h={90}
          />
        ))}
      </Flex>
    );
  else
    return (
      <Box pos="relative" w={515.93} h={482}>
        {picture.map((pic, index) => (
          <Picture key={index} {...pic} />
        ))}
      </Box>
    );
};

const Picture = ({ ...props }: ImageProps) => {
  const { hovered, ref } = useHover();
  return (
    <Box
      pos="absolute"
      style={(theme) => ({
        overflow: 'hidden',
        borderRadius: theme.radius.lg,
      })}
      {...props}
    >
      <Image
        ref={ref}
        src={placeholder}
        alt=""
        fit="contain"
        component={NextImage}
        radius="lg"
        style={{
          transform: hovered ? 'scale(1.2)' : 'none',
          transition: 'transform 0.3s ease, border-color 0.3s ease',
        }}
        {...props}
      />
    </Box>
  );
};
