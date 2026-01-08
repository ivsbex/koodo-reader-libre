import {
  browserName,
  browserVersion,
  isElectron,
  osName,
  osVersion,
} from "react-device-detect";
import {
  ConfigService,
  KookitConfig,
  TokenService,
  UserRequest,
} from "../../assets/lib/kookit-extra-browser.min";
import packageJson from "../../../package.json";
import toast from "react-hot-toast";
import i18n from "../../i18n";
import { handleExitApp } from "./common";
import { getServerRegion } from "../common";
let userRequest: UserRequest | undefined;
export const getTempToken = async () => {
  let userRequest = await getUserRequest();
  let response = await userRequest.getTempToken();
  if (response.code === 200) {
    return response;
  } else if (response.code === 401) {
    handleExitApp();
    return response;
  } else {
    toast.error(i18n.t("Fetch failed, error code") + ": " + response.msg);
    return response;
  }
};
export const fetchUserInfo = async () => {
  let userRequest = await getUserRequest();
  let response = await userRequest.getUserInfo();
  if (response.code === 401) {
    handleExitApp();
  }
  return response;
};
export const updateUserConfig = async (config: any) => {
  let userRequest = await getUserRequest();
  let response = await userRequest.updateUserConfig(config);
  if (response.code === 200) {
  } else if (response.code === 401) {
    handleExitApp();
  } else {
    toast.error(i18n.t("Setup failed, error code") + ": " + response.msg);
  }
};
export const getUserRequest = async () => {
  if (userRequest) {
    return userRequest;
  }
  userRequest = new UserRequest(TokenService, ConfigService, getServerRegion());
  return userRequest;
};
export const resetUserRequest = () => {
  userRequest = undefined;
};
export const getOSName = () => {
  return isElectron ? osName : browserName;
};
export const detectBrowser = () => {
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf("Edg") > -1) {
    return "Microsoft Edge";
  } else if (userAgent.indexOf("Chrome") > -1) {
    return "Chrome";
  } else if (userAgent.indexOf("Firefox") > -1) {
    return "Firefox";
  } else if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  } else if (userAgent.indexOf("Opera") > -1) {
    return "Opera";
  } else if (
    userAgent.indexOf("Trident") > -1 ||
    userAgent.indexOf("MSIE") > -1
  ) {
    return "Internet Explorer";
  }

  return "Unknown";
};
export const getOsVersionNumber = (): string => {
  return isElectron ? osVersion : browserVersion;
};
