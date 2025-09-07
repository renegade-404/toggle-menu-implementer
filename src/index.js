import './styles.css';
import { toggleMenu } from './dropdown-menu-toggle';
import { imageCarousel } from './image-carousel';
import kalista from "./imgs/kalista-img.jpg";
import thresh from "./imgs/thresh-img.jpg";
import hecarim from "./imgs/hecarim-img.jpg";
import viego from "./imgs/viego-img.jpg";

toggleMenu();

const imgs = {
  char1: kalista,
  char2: thresh,
  char3: hecarim,
  char4: viego,
}

imageCarousel(imgs);