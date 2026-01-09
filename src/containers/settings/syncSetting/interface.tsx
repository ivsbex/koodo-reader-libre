import BookModel from "../../../models/Book";
import PluginModel from "../../../models/Plugin";
import { RouteComponentProps } from "react-router-dom";
export interface SettingInfoProps extends RouteComponentProps<any> {
  handleSetting: (isSettingOpen: boolean) => void;
  handleSettingMode: (settingMode: string) => void;
  handleSettingDrive: (settingDrive: string) => void;
  handleTokenDialog: (isOpenTokenDialog: boolean) => void;
  handleFetchDataSourceList: () => void;
  handleFetchDefaultSyncOption: () => void;
  handleFetchAuthed: () => void;
  handleLoadingDialog: (isShow: boolean) => void;
  t: (title: string) => string;
  handleFetchBooks: () => void;
  handleFetchPlugins: () => void;
  cloudSyncFunc: () => Promise<void>;
  handleFetchUserInfo: () => Promise<void>;
  plugins: PluginModel[];
  books: BookModel[];
  dataSourceList: string[];
  defaultSyncOption: string;
  isAuthed: boolean;
  settingDrive: string;
}
export interface SettingInfoState {
  appSkin: string;
  storageLocation: string;
  isKeepLocal: boolean;
  isEnableKoodoLibreSync: boolean;
  isDisableAutoSync: boolean;
  autoOffline: boolean;
  currentThemeIndex: number;
  driveConfig: any;
  isAddNew: boolean;
  snapshotList: { file: string; time: number }[];
}
