import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader speed={0.7} width={300} height={120} viewBox="0 0 300 120" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
    <rect x="0" y="0" rx="12" ry="12" width="300" height="160" />
  </ContentLoader>
);

export default MyLoader;
