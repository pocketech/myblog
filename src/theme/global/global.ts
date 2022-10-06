import type {
  GlobalStyleProps,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

// propsはカラーモードでスタイルを変えたいときに使用する。
export const global = (_props: GlobalStyleProps): SystemStyleObject => {
  return {
    body: {
      textColor: "gray.900",
    },
  };
};
