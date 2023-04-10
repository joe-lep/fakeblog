import { RouteData } from "../types";

const urlParamRegex = /:([^/$]+)/g;

const fillPathParams = (routeData: RouteData | string, pathParams: any) => {
  const path = typeof routeData === 'string' ? routeData : routeData.path;

  return path.replaceAll(urlParamRegex, (match, paramId) => pathParams[paramId] ?? match);
};

export default fillPathParams;
