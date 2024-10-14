import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";

type NewsProps = {};

const News = memo(({}: NewsProps) => {
  return (
    <>
      <AppHead title="News" description="" />
      <div>News</div>
    </>
  );
});
News.displayName = "News";

export default News;
