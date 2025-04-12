enum PageTitle {
  HOME = "Home",
  ABOUT = "About me",
}

export enum AppPath {
  HOME = "/home",
  ABOUT = "/about",
}

export const getPageTitleFromPath = (pathname: string): string => {
  switch (pathname as AppPath) {
    case AppPath.HOME:
      return PageTitle.HOME;
    case AppPath.ABOUT:
      return PageTitle.ABOUT;
    default:
      return "Nabhag Motivaras";
  }
};
