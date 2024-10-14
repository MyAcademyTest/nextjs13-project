import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { GetStaticPathsResult } from "next";

type NewsDetailsProps = {
  news: {
    id: string;
    title: string;
  };
};

const NewsDetails = memo(({ news }: NewsDetailsProps) => {
  return (
    <>
      <AppHead title="NewsDetails" description="" />
      <div>News Details</div>
      <div>{news.id}</div>
      <div>{news.title}</div>
    </>
  );
});
NewsDetails.displayName = "NewsDetails";

export default NewsDetails;

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<{
    newsId: string;
  }>
> {
  const newsList = [
    {
      id: "1",
      title: "News 1",
    },
    {
      id: "2",
      title: "News 2",
    },
  ];
  return {
    paths: newsList.map((news) => ({
      params: {
        newsId: news.id,
      },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({
  params: { newsId },
}: GetStaticPropsContext<{ newsId: string }>): Promise<
  GetStaticPropsResult<NewsDetailsProps>
> {
  /* return {
    notFound: true,
  };
  */
  const news = {
    id: newsId,
    title: "Title of the news " + newsId,
  };
  return {
    props: {
      news,
    },
  };
}
