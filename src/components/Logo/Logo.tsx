import type { BoxProps } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";

type Props = BoxProps;

export const Logo: React.FC<Props> = ({
  width = "xs",
  color = "black",
  ...others
}) => {
  return (
    <chakra.figure
      display="inline-block"
      width={width}
      color={color}
      {...others}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 3146.3414634146343 1104.878048780488"
      >
        <g transform="scale(7.317073170731708) translate(-10, 10)">
          <g
            id="SvgjsG1015"
            transform="matrix(0.6595325427335926,0,0,0.6595325427335926,22.966150051833775,30.427823020441068)"
            fill="#ffe239"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M87.5,24.3L87.5,24.3C79.3,11.5,65.2,3.9,49.9,3.9c-8.7,0-17.2,2.5-24.6,7.3c-13.2,8.6-20.7,23-20.7,37.9  c0,5.8,1.1,11.8,3.5,17.4c0.3,0.7,1,1.2,1.8,1.2c0.3,0,0.5-0.1,0.8-0.2c0.7-0.3,1.2-1.1,1.2-1.8c0-0.2,0-0.5-0.1-0.7  c-2.2-5.2-3.2-10.6-3.2-15.9c0-13.6,6.8-26.8,18.9-34.7c6.7-4.3,14.4-6.7,22.4-6.7v0l0,0c0,0,0,0,0,0h0l0,0l0,0  c14,0,26.8,7,34.4,18.6c4.4,6.8,6.5,14.5,6.5,22.1h0l0,0v0v0v0v0l0,0v0c0,13.5-6.7,26.8-18.8,34.7c-6.7,4.3-14.4,6.7-22.3,6.7l0,0  h-0.2c0,0,0,0,0,0h0c-10.7,0-21-4.3-28.6-11.8l-1.5-1.5l2.7,0.3l11.8-2.8l36.6-36.5c5.2-4.6-7.4-13.7-9.8-14.6l0,0l0,0  c-1.2,0-2.4,0.5-3.3,1.4L20.8,60.9L17,76.5l0.2,0L17,76.7l0,0l-0.2,0.2l0,0c-0.4,0.4-0.6,0.8-0.6,1.4l0,0.1c0,0.5,0.2,0.9,0.5,1.3  C25,88.6,37,93.9,49.4,93.9v0h0c8.7,0,17.2-2.5,24.6-7.3c10.1-6.6,17-16.6,19.6-28.4c0.7-3.2,1-6.5,1-9.7  C94.7,39.9,92.2,31.6,87.5,24.3z M59.5,26.4l0.2-0.1l0.3-0.1l0.5-0.2l0.5,0.2l0.5,0.2l6.7,6.8l0.3,0.4l0.2,0.5v0.3v0.3l-0.1,0.2  l-0.2,0.5L62.6,41l-8.9-8.9L59.5,26.4z M25,60.9c5.2-5.2,20.8-20.9,26.1-26.2l0.9-0.9l8.9,8.9l-27,27L33,70.7l-4.5-4.5l-4.4-4.4  L25,60.9z M23.1,64.3l7.5,7.5l-7.9,1.9l-2,0.5L23.1,64.3z"
            ></path>
          </g>
          <g
            id="SvgjsG1016"
            transform="matrix(2.0469819353575085,0,0,2.0469819353575085,96.96880781904407,40.15625222450172)"
            fill="currentColor"
          >
            <path d="M1.02 7.619999999999999 c0.02 1.18 0.02 11.2 0.02 12.02 c0 0.3 0.04 0.36 0.34 0.36 c0.68 0 0.68 0.02 1.36 0 c0.14 0 0.38 0 0.5 -0.06 c0.14 -0.06 0.06 -4.78 0.06 -5.04 c0 -0.28 0.56 -0.22 0.72 -0.22 c3.34 0 4.26 -2.4 4.26 -4.44 c0 -1.84 -0.36 -5.24 -4.52 -5.24 c-0.72 0 -1.46 0.02 -2.16 0.02 c-0.16 0 -0.36 -0.02 -0.5 0.08 c-0.16 0.12 -0.1 1.9 -0.08 2.52 z M3.32 11.74 c0 -0.44 -0.02 -3.06 0 -3.86 c0 -0.12 -0.02 -0.26 0 -0.4 c0.06 -0.22 0.32 -0.22 0.52 -0.2 c1.16 0.08 1.82 1.1 1.92 2.18 c0.08 0.78 -0.02 1.94 -0.58 2.56 c-0.4 0.42 -0.92 0.68 -1.6 0.68 c-0.14 0 -0.28 -0.16 -0.28 -0.3 c0 -0.22 0 -0.44 0.02 -0.66 z M20.82 8.68 c0.42 1.24 0.52 2.58 0.52 3.9 c0 1.1 -0.2 2.16 -0.48 3.22 c-0.36 1.26 -0.96 2.4 -2.04 3.14 c-0.8 0.58 -1.64 0.96 -2.62 1.06 c-0.14 0 -0.26 0.02 -0.4 0.02 c-0.12 0 -0.24 -0.02 -0.38 -0.02 c-0.98 -0.1 -1.82 -0.48 -2.64 -1.06 c-1.06 -0.74 -1.68 -1.88 -2.02 -3.14 c-0.3 -1.06 -0.48 -2.12 -0.48 -3.22 c0 -1.32 0.1 -2.66 0.52 -3.9 c0.74 -2.14 2.78 -3.66 5 -3.7 c2.22 0.04 4.26 1.56 5.02 3.7 z M18.88 14.04 c0.2 -1.22 0.12 -2.46 -0.12 -3.68 c-0.24 -1.1 -0.72 -2.18 -1.64 -2.84 c-0.16 -0.12 -0.34 -0.22 -0.52 -0.28 c-0.26 -0.12 -0.54 -0.16 -0.8 -0.16 s-0.52 0.04 -0.78 0.16 c-0.2 0.06 -0.36 0.16 -0.52 0.28 c-0.94 0.66 -1.42 1.74 -1.64 2.84 c-0.24 1.22 -0.32 2.46 -0.12 3.68 c0.2 1.1 0.6 2.58 1.64 3.14 c0.44 0.24 0.92 0.4 1.42 0.42 c0.5 -0.02 1 -0.18 1.44 -0.42 c1.04 -0.56 1.44 -2.04 1.64 -3.14 z M31.240000000000002 7.359999999999999 c0.02 -0.66 0 -1.2 0 -1.84 c0 -0.74 -1.34 -0.66 -1.82 -0.64 c-2.14 0.14 -4.18 1.5 -5.16 3.36 c-0.28 0.54 -0.48 1.1 -0.62 1.68 c-0.34 1.36 -0.36 2.8 -0.2 4.18 c0.14 1.3 0.48 2.6 1.28 3.64 c1.38 1.82 3.92 2.46 6.1 2.12 c0.1 -0.02 0.2 -0.04 0.28 -0.1 c0.06 -0.04 0.12 -0.12 0.12 -0.2 l0.06 -1.14 c0.02 -0.36 0 -0.34 0 -0.7 c0 -0.48 -1 -0.12 -1.62 -0.12 c-0.6 0 -1.24 -0.02 -1.78 -0.3 c-0.96 -0.54 -1.5 -1.62 -1.8 -2.64 c-0.34 -1.1 -0.42 -2.28 -0.22 -3.4 c0.24 -1.46 0.94 -3.14 2.48 -3.64 c0.88 -0.3 1.82 -0.2 2.7 -0.1 c0.12 0.02 0.2 -0.06 0.2 -0.16 z M36 16.38 c0 -0.7 -0.1 -2.6 -0.08 -3 c0 -0.06 0.04 -0.14 0.06 -0.14 c0.04 0 0.12 0.04 0.14 0.06 c0.64 0.84 3.64 6.66 4 6.68 c0.1 0.02 0.2 0.02 0.3 0.02 c0.68 -0.04 1.28 0 1.96 0 c0.7 0 0.24 -0.68 0.12 -0.86 c-0.18 -0.26 -2.56 -4.52 -2.7 -4.78 c-0.4 -0.68 -0.74 -1.42 -1.14 -2.08 c-0.04 -0.08 -0.08 -0.2 -0.06 -0.28 c0.04 -0.24 0.1 -0.46 0.2 -0.68 c0.48 -0.94 0.98 -1.9 1.56 -2.8 c0.64 -1.02 1 -1.66 1.52 -2.58 c0.12 -0.22 0.2 -0.46 0.28 -0.72 c0.02 -0.1 -0.06 -0.2 -0.18 -0.2 c-0.38 -0.02 -1.76 0 -2.2 0 c-0.2 0 -0.4 0.04 -0.5 0.22 c-0.26 0.5 -2.94 5.4 -3.2 5.84 c-0.02 0.04 -0.08 0.06 -0.14 0.06 c0 0 -0.04 -0.06 -0.04 -0.1 c-0.02 -1.12 0.18 -4.78 0.14 -5.52 c-0.02 -0.44 -0.1 -0.48 -0.54 -0.5 c-0.48 -0.02 -1.14 -0.02 -1.62 -0.02 c-0.44 0 -0.48 0.24 -0.54 0.56 c-0.02 0.06 -0.02 1.94 -0.02 2.78 c0 1.22 -0.1 8.86 0.04 11.28 c0 0.24 0.06 0.38 0.26 0.38 c0.54 -0.04 1.34 0 1.88 0 c0.38 0 0.44 -0.04 0.44 -0.68 c0 -0.86 0.08 -1.64 0.08 -2.7 c0 -0.08 -0.02 -0.16 -0.02 -0.24 z M44.78000000000001 15.9 l-0.02 0 c0 0.5 -0.02 1.02 0 1.54 c0.02 0.64 0.06 1.28 0.1 1.92 c0 0.22 0.06 0.28 0.26 0.32 c0.42 0.1 0.82 0.12 1.24 0.12 c1.08 -0.04 2.16 0.04 3.24 0 c0.44 -0.02 0.64 0.02 1.08 -0.06 c0.4 -0.08 0.54 -0.3 0.54 -0.9 c-0.04 -0.38 -0.02 -0.54 -0.02 -1 c0 -0.66 -0.46 -0.88 -0.86 -0.86 c-0.28 0.02 -1.62 -0.02 -2.16 -0.02 c-0.9 0.02 -0.76 0.14 -0.76 -0.8 c0 -0.76 0.02 -1.74 0.02 -2.52 c0 -0.42 0.04 -0.56 0.44 -0.56 l2.5 0 c0.4 0.06 0.68 -0.22 0.68 -0.64 s0.04 -0.44 0.04 -0.86 l-0.06 -0.6 c-0.04 -0.34 -0.16 -0.46 -0.5 -0.46 c-0.22 0 -0.44 0.02 -0.66 0.04 c-0.86 0.06 -1.26 -0.06 -2.1 0 c-0.28 0 -0.32 -0.04 -0.34 -0.3 c-0.08 -0.78 0 -1.64 0.08 -2.42 c0.02 -0.32 0.1 -0.38 0.4 -0.4 l2.82 -0.02 c0.38 -0.04 0.5 -0.02 0.48 -0.4 c-0.04 -0.58 0.02 -1.18 -0.04 -1.76 c-0.04 -0.32 -0.14 -0.38 -0.5 -0.38 c-0.6 0.02 -0.74 0.02 -1.34 0.06 c-0.6 0.02 -3 0.02 -3.58 0.02 c-0.84 0 -0.9 -0.06 -0.92 0.96 c-0.04 0.8 -0.02 1.62 -0.02 2.44 c0 1.4 -0.08 6.42 -0.04 7.54 z M53.580000000000005 15.620000000000001 c0.14 0.04 0.38 0.02 1.42 0.02 c0.7 0 1.46 -0.02 2.16 -0.02 c0.76 0 0.72 -0.3 0.72 -0.7 c0.02 -0.58 0.04 -0.86 0.04 -1.44 c0 -0.38 -0.1 -0.54 -0.48 -0.54 c-1.96 0 -2.36 0.08 -3.18 0.02 c-0.28 -0.02 -0.56 0 -0.84 0.04 c-0.1 0 -0.2 0.06 -0.2 0.24 c0.04 0.64 0.04 1.26 0.06 1.92 c0.02 0.26 0.04 0.38 0.3 0.46 z M62.46000000000001 17.82 c0.02 0.62 0.02 1.24 0.04 1.86 c0 0.28 0.02 0.32 0.3 0.32 l1.8 0 c0.38 0 0.3 -0.64 0.28 -0.98 l0.06 -11.2 c0 -0.3 0.1 -0.4 0.5 -0.4 l1.76 0 c0.42 0 0.32 -0.72 0.32 -1.22 c0 -0.44 0.16 -1.2 -0.32 -1.2 c-0.34 0 -3.6 0 -4.94 0.02 c-0.66 0 -1.2 -0.02 -1.86 -0.02 c-0.5 0 -0.48 0.4 -0.48 1.28 c0 0.56 -0.02 1.12 0.46 1.12 c0.28 0 1.42 0 1.74 0.02 c0.2 0 0.34 0.06 0.38 0.28 c0 0.06 0.02 0.12 0.02 0.18 c0 1.44 -0.1 8.14 -0.06 9.94 z M69.56 15.9 l-0.02 0 c0 0.5 -0.02 1.02 0 1.54 c0.02 0.64 0.06 1.28 0.1 1.92 c0 0.22 0.06 0.28 0.26 0.32 c0.42 0.1 0.82 0.12 1.24 0.12 c1.08 -0.04 2.16 0.04 3.24 0 c0.44 -0.02 0.64 0.02 1.08 -0.06 c0.4 -0.08 0.54 -0.3 0.54 -0.9 c-0.04 -0.38 -0.02 -0.54 -0.02 -1 c0 -0.66 -0.46 -0.88 -0.86 -0.86 c-0.28 0.02 -1.62 -0.02 -2.16 -0.02 c-0.9 0.02 -0.76 0.14 -0.76 -0.8 c0 -0.76 0.02 -1.74 0.02 -2.52 c0 -0.42 0.04 -0.56 0.44 -0.56 l2.5 0 c0.4 0.06 0.68 -0.22 0.68 -0.64 s0.04 -0.44 0.04 -0.86 l-0.06 -0.6 c-0.04 -0.34 -0.16 -0.46 -0.5 -0.46 c-0.22 0 -0.44 0.02 -0.66 0.04 c-0.86 0.06 -1.26 -0.06 -2.1 0 c-0.28 0 -0.32 -0.04 -0.34 -0.3 c-0.08 -0.78 0 -1.64 0.08 -2.42 c0.02 -0.32 0.1 -0.38 0.4 -0.4 l2.82 -0.02 c0.38 -0.04 0.5 -0.02 0.48 -0.4 c-0.04 -0.58 0.02 -1.18 -0.04 -1.76 c-0.04 -0.32 -0.14 -0.38 -0.5 -0.38 c-0.6 0.02 -0.74 0.02 -1.34 0.06 c-0.6 0.02 -3 0.02 -3.58 0.02 c-0.84 0 -0.9 -0.06 -0.92 0.96 c-0.04 0.8 -0.02 1.62 -0.02 2.44 c0 1.4 -0.08 6.42 -0.04 7.54 z M85.9 7.359999999999999 c0.02 -0.66 0 -1.2 0 -1.84 c0 -0.74 -1.34 -0.66 -1.82 -0.64 c-2.14 0.14 -4.18 1.5 -5.16 3.36 c-0.28 0.54 -0.48 1.1 -0.62 1.68 c-0.34 1.36 -0.36 2.8 -0.2 4.18 c0.14 1.3 0.48 2.6 1.28 3.64 c1.38 1.82 3.92 2.46 6.1 2.12 c0.1 -0.02 0.2 -0.04 0.28 -0.1 c0.06 -0.04 0.12 -0.12 0.12 -0.2 l0.06 -1.14 c0.02 -0.36 0 -0.34 0 -0.7 c0 -0.48 -1 -0.12 -1.62 -0.12 c-0.6 0 -1.24 -0.02 -1.78 -0.3 c-0.96 -0.54 -1.5 -1.62 -1.8 -2.64 c-0.34 -1.1 -0.42 -2.28 -0.22 -3.4 c0.24 -1.46 0.94 -3.14 2.48 -3.64 c0.88 -0.3 1.82 -0.2 2.7 -0.1 c0.12 0.02 0.2 -0.06 0.2 -0.16 z M93.94 14.08 c0 0.9 -0.02 2.68 -0.04 2.68 l0 2.72 c0 0.12 -0.02 0.32 0.04 0.44 c0.06 0.14 0.24 0.1 0.36 0.08 c0.58 -0.06 1.16 0.02 1.74 0 c0.64 -0.02 0.44 -1 0.42 -1.4 c-0.08 -0.88 0.02 -7.58 0.02 -9.98 c0 -1.08 -0.04 -3.3 -0.1 -3.4 c-0.1 -0.18 -0.36 -0.22 -0.56 -0.24 c-0.44 -0.08 -0.66 0.04 -1.32 0.04 s-0.7 0.2 -0.7 0.9 l0 0.6 c-0.02 0.48 0.06 3.84 0.06 4.38 c0 0.26 -0.02 0.28 -0.28 0.28 c-0.66 -0.02 -1.58 0.06 -2.26 0 c-0.98 -0.08 -0.76 0 -0.82 -0.9 l0 -0.12 c0 -1.28 0.16 -4.6 0.1 -4.8 c-0.1 -0.3 -0.22 -0.36 -0.48 -0.34 c-0.6 0.04 -1.22 -0.06 -1.82 -0.02 c-0.2 0.02 -0.26 0.08 -0.32 0.28 c-0.02 0.1 -0.04 0.2 -0.04 0.3 c0 0.62 0.04 1.46 0.06 2.08 l-0.06 11.86 c0 0.52 0.46 0.46 1.48 0.46 c0.94 0 1.18 0.22 1.18 -0.9 c0 -0.9 -0.06 -2.04 -0.04 -2.94 c0.02 -0.7 0 -1.38 0 -2.08 c0.02 -0.26 0.08 -0.34 0.32 -0.34 c0.88 -0.02 1.84 0 2.72 0 c0.28 0 0.34 0.04 0.34 0.36 z M103.52 6.539999999999999 c0 0.96 -0.04 11.28 0 12.2 c0.02 0.22 0.02 0.44 0.02 0.66 c0 0.16 0.1 0.26 0.24 0.32 c0.12 0.04 0.28 0.08 0.4 0.08 c0.58 -0.06 1.2 0 1.8 -0.02 c1.04 0.08 1.98 -0.16 2.88 -0.64 c0.84 -0.48 1.3 -1.34 1.62 -2.24 c0.26 -0.76 0.22 -1.66 0.08 -2.44 c-0.12 -0.7 -0.44 -1.38 -0.86 -1.94 c-0.06 -0.08 -0.92 -0.62 -0.88 -0.66 c0.52 -0.74 1.26 -1.36 1.36 -2.28 c0.08 -0.8 -0.1 -1.62 -0.38 -2.36 c-0.18 -0.48 -0.42 -0.94 -0.8 -1.3 c-0.64 -0.6 -1.6 -0.86 -2.44 -0.94 c-0.86 -0.08 -1.66 -0.02 -2.52 -0.06 c-0.3 0 -0.44 0.12 -0.44 0.44 c0 0.42 -0.08 0.76 -0.08 1.18 z M105.98 10.18 c-0.02 -0.22 0 -1.98 -0.04 -2.64 c-0.02 -0.24 0.12 -0.36 0.38 -0.3 c0.2 0.04 0.36 0.06 0.52 0.18 c0.5 0.38 0.88 0.84 0.9 1.48 c0 0.32 0 0.64 -0.12 0.94 c-0.14 0.36 -0.34 0.64 -0.7 0.82 c-0.24 0.12 -0.46 0.26 -0.7 0.36 c-0.12 0.04 -0.24 -0.02 -0.26 -0.14 c0 -0.24 0.02 -0.7 0.02 -0.7 z M107.98 15.48 c0 0.1 -0.02 0.28 -0.02 0.46 c-0.02 0.6 -0.8 1.36 -1.7 1.38 c-0.06 0 -0.16 -0.06 -0.18 -0.12 c-0.04 -0.12 -0.08 -0.26 -0.08 -0.4 c-0.02 -0.62 0 -1.22 0 -1.88 c0.06 -0.42 0.02 -0.86 0.02 -1.3 c0.02 -0.34 0.1 -0.4 0.42 -0.46 c0.48 -0.06 0.92 0.14 1.14 0.52 c0.26 0.46 0.36 0.96 0.4 1.48 l0 0.32 z M112.68 6.960000000000001 c-0.02 1.24 0.1 10.3 0.08 10.96 c0 0.62 0 1.24 0.02 1.86 c0 0.1 0.06 0.2 0.16 0.2 c1.4 0.06 2.78 -0.06 4.18 -0.04 c0.46 0.02 0.92 0 1.36 0 c0.44 -0.02 0.48 -0.2 0.46 -0.56 c-0.02 -0.56 -0.02 -1.06 -0.02 -1.6 c-0.02 -0.28 -0.18 -0.38 -0.42 -0.38 c-0.82 0.02 -1.64 -0.02 -2.46 0.02 c-0.14 0.02 -0.28 0.02 -0.42 0.02 c-0.24 -0.02 -0.3 -0.08 -0.32 -0.34 l0 -0.3 c-0.06 -1.66 0.06 -3.38 0.06 -5.04 c-0.02 -1.4 0 -2.66 -0.02 -3.9 c0 -0.54 0 -1.08 -0.02 -1.6 c-0.02 -0.32 0 -0.66 -0.08 -0.98 c-0.04 -0.12 -0.1 -0.28 -0.24 -0.28 l-1.88 0 c-0.32 0 -0.42 0.22 -0.44 0.54 l0 1.42 z M131.48000000000002 8.68 c0.42 1.24 0.52 2.58 0.52 3.9 c0 1.1 -0.2 2.16 -0.48 3.22 c-0.36 1.26 -0.96 2.4 -2.04 3.14 c-0.8 0.58 -1.64 0.96 -2.62 1.06 c-0.14 0 -0.26 0.02 -0.4 0.02 c-0.12 0 -0.24 -0.02 -0.38 -0.02 c-0.98 -0.1 -1.82 -0.48 -2.64 -1.06 c-1.06 -0.74 -1.68 -1.88 -2.02 -3.14 c-0.3 -1.06 -0.48 -2.12 -0.48 -3.22 c0 -1.32 0.1 -2.66 0.52 -3.9 c0.74 -2.14 2.78 -3.66 5 -3.7 c2.22 0.04 4.26 1.56 5.02 3.7 z M129.54000000000002 14.04 c0.2 -1.22 0.12 -2.46 -0.12 -3.68 c-0.24 -1.1 -0.72 -2.18 -1.64 -2.84 c-0.16 -0.12 -0.34 -0.22 -0.52 -0.28 c-0.26 -0.12 -0.54 -0.16 -0.8 -0.16 s-0.52 0.04 -0.78 0.16 c-0.2 0.06 -0.36 0.16 -0.52 0.28 c-0.94 0.66 -1.42 1.74 -1.64 2.84 c-0.24 1.22 -0.32 2.46 -0.12 3.68 c0.2 1.1 0.6 2.58 1.64 3.14 c0.44 0.24 0.92 0.4 1.42 0.42 c0.5 -0.02 1 -0.18 1.44 -0.42 c1.04 -0.56 1.44 -2.04 1.64 -3.14 z M142.94 16.64 c0.02 0.96 0 1.94 -0.06 2.9 c0 0.08 -0.06 0.16 -0.12 0.2 c-0.08 0.06 -0.18 0.1 -0.28 0.1 c-1.24 0.2 -2.74 0.3 -3.94 -0.1 c-2.7 -0.92 -4.54 -3.94 -4.54 -7.4 c0 -3.74 2.68 -7.38 6.58 -7.52 c0.52 -0.02 2.3 -0.1 2.24 0.78 c-0.04 0.64 0.02 1.16 0 1.82 c0 0.12 -0.08 0.2 -0.2 0.18 c-1.14 -0.14 -2.44 -0.5 -3.54 0.02 c-0.92 0.44 -1.56 1.38 -1.92 2.3 c-0.64 1.52 -0.5 3.28 -0.06 4.84 c0.34 1.24 1.08 2.7 2.56 2.74 c0.08 0.02 0.84 0.06 0.84 -0.02 l-0.06 -2.56 c-0.02 -0.12 -0.02 -0.24 -0.04 -0.36 s-0.1 -0.16 -0.22 -0.18 c-0.32 0 -0.32 -0.02 -0.64 -0.02 c-0.74 0 -0.58 -0.5 -0.6 -0.66 c-0.02 -0.3 0 -0.58 -0.02 -0.88 c-0.02 -0.28 0.06 -0.5 0.34 -0.54 l0.24 0 c1.04 -0.06 2.1 0.02 3.2 0.02 c0.16 0 0.24 0.2 0.24 0.38 c0.02 0.2 0.02 0.34 0.02 0.54 c0.06 0.98 -0.06 1.98 -0.04 2.96 c0.02 0.16 0.02 0.3 0.02 0.46 z"></path>
          </g>
        </g>
      </svg>
    </chakra.figure>
  );
};
