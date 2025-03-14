import { Image } from '@mantine/core';
import NextImage from 'next/image';
import pictureMe from '../../assets/Picture_Cecile.png';
import classes from './CV.module.css';
export const PictureMe = () => (
  <Image
    src={pictureMe}
    alt=""
    w={400}
    h={300}
    fit="contain"
    component={NextImage}
    className={classes.picture}
    display={{ base: 'none', sm: 'block' }}
  />
);
