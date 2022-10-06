import { NextSeo } from "next-seo";

import { OGP_IMAGE_SIZE } from "@/constants/ogpImageSize";

type Props = {
  ogTitle: string;
  ogDescription: string;
  ogImageUrl: string;
};

export const Head: React.FC<Props> = ({
  ogTitle,
  ogDescription,
  ogImageUrl,
}) => {
  return (
    <NextSeo
      openGraph={{
        images: [
          {
            url: ogImageUrl,
            width: OGP_IMAGE_SIZE.width,
            height: OGP_IMAGE_SIZE.height,
            alt: "og image",
          },
        ],
        title: ogTitle,
        description: ogDescription,
      }}
    />
  );
};
