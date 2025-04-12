import { Helmet } from "react-helmet-async";

interface PageTitleProps {
  title: string;
}

export const PageTitle = (props: PageTitleProps) => {
  return (
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
  );
};
