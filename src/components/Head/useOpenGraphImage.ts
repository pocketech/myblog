import { useRouter } from "next/router";

import { getAbsoluteURL } from "@/utils/getAbsoluteURL";

export const useOpenGraphImage = () => {
  const router = useRouter();
  const searchParams = new URLSearchParams();
  searchParams.set("path", router.asPath + "/ogp");
  const fullImageURL = getAbsoluteURL(`/api/ogp?${searchParams}`);
  return { imageURL: fullImageURL };
};
