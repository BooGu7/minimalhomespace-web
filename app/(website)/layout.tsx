import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default: settings?.title || "Boo Space",
      template: "%s | Blog"
    },
    description:
      settings?.description ||
      "Khám phá mẹo công nghệ, ý tưởng sáng tạo và phong cách sống tối giản. Chia sẻ kiến thức lập trình, phần mềm và nội thất hiện đại giúp tối ưu công việc và cuộc sống.",
    keywords: [
      "boo",
      "minimalist",
      "nội thất",
      "công nghệ",
      "phần mềm",
      "decor",
      "thiết kế"
    ],
    authors: [{ name: "Tôn Thất Trọng" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Boo Space",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
