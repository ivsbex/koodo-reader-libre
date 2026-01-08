import React from "react";
import "./supportDialog.css";
import { SupportDialogProps, SupportDialogState } from "./interface";
import { Trans } from "react-i18next";
import Lottie from "react-lottie";
import supportAnimation from "../../../assets/lotties/support.json";
import exitAnimation from "../../../assets/lotties/exit.json";
import {
  getServerRegion,
  getWebsiteUrl,
  handleContextMenu,
  openInBrowser,
} from "../../../utils/common";
import {
  ConfigService,
  TokenService,
} from "../../../assets/lib/kookit-extra-browser.min";
import toast from "react-hot-toast";
import { handleExitApp } from "../../../utils/request/common";
import {
  fetchUserInfo,
  getTempToken,
  getUserRequest,
} from "../../../utils/request/user";
const newOptions = {
  loop: true,
  autoplay: true,
  animationData: supportAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const exitOptions = {
  loop: true,
  autoplay: true,
  animationData: exitAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
class SupportDialog extends React.Component<
  SupportDialogProps,
  SupportDialogState
> {
  constructor(props: SupportDialogProps) {
    super(props);
    this.state = {};
  }

  handleClose = () => {
    this.props.handleShowSupport(false);
  };

  render() {
    return (
      <>
      </>
    );
  }
}

export default SupportDialog;
