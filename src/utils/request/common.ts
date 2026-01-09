import axios from "axios";
import toast from "react-hot-toast";
import i18n from "../../i18n";
import { TokenService } from "../../assets/lib/kookit-extra-browser.min";
import { getServerRegion, reloadManager } from "../common";
export const uploadFile = async (url: string, file: any) => {
  return new Promise<boolean>((resolve) => {
    axios
      .put(url, file, {})
      .then(() => {
        resolve(true);
      })
      .catch((err) => {
        console.error(err);
        resolve(false);
      });
  });
};
export const handleExitApp = async () => {
  toast.error(i18n.t("Authorization failed, please login again"));
  await TokenService.deleteToken("is_authed");
  await TokenService.deleteToken("access_token");
  await TokenService.deleteToken("refresh_token");
  reloadManager();
};
