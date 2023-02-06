import React, { useContext } from "react";
import styles from "./style.module.css";
import parentsStyles from "../SideBar/style.module.css";
import language from "../../functions/language";
import ImageContext from "../../context/ImageContext";
import apiCalls from "../../functions/apiRequest";
// creator: Hadar Naiman
export default function BtnRunISP({ sendSettingsToServer }, props) {
  const value = useContext(ImageContext);
  const prepareFilesToServer = (diff) => {
    let formData = new FormData();
    for (let i of diff) {
      formData.append("file", i);
    }
    return formData;
  };
  const uplaodImageToServer = async (files) => {
    console.log(files);
    const srcList = await apiCalls(
      "post",
      "http://localhost:5000/api/files",
      prepareFilesToServer(files)
    );
    console.log(srcList.data);
    return srcList;
  };
  const uplaodSettingToServer = async (setting) => {
    const afterimage = await apiCalls(
      "put",
      "http://localhost:5000/api/files/runisp",
      setting
    );
    console.log(afterimage);
    return afterimage;
  };
  const getRunIspJson = (setting)=> { 
    return {
      enable: true,
      preprocessing: {
        image_size: [512, 640],
        crop: [3, 3],
      },
      raw_denoising: {},
      nuc: {
        enable: setting.NUC.enable,
        method: setting.NUC.method.pt1?"pt1":setting.NUC.method.pt2?"pt2":null,
        nuc_file: setting.NUC.method.nuc_file,
      },
      dynamic_range: {
        enable: setting.DRS.enable,
        method: setting.DRS.method.method,
        cutoffs: setting.DRS.method.cutoffs,
      },
      demosaic: {
        method: setting.demosaic.method,
        array_order: setting.demosaic.pixelOrder,
      },
      demosaic_denoising: {
        method: setting.denoise.method,
        psd: setting.denoise.ESP,
      },
      sharpening: {
        enable: setting.sharpening.enable,
        method: {
          method: setting.sharpening.method,
          radius: setting.sharpening.radius,
          amount: setting.sharpening.ESP,
          threshold: setting.sharpening.trehold,
        },
      },
    }
  }
  const runISP = async () => {
    const images = value.beforeISP.images;
    const setting = value.beforeISP;
    const reqFiles = await uplaodImageToServer(images);
    console.log(reqFiles);
    value.setRootServer(reqFiles.data.root);
    // reqFiles.data.src[1].root.isp=setting
    // console.log( "req files ",reqFiles.data.src[1].root);
    const settings = {
      root: reqFiles.data.root,
      runIspSettings:getRunIspJson(setting),
    };
    const reqSetting = await uplaodSettingToServer(settings);
    console.log("req setting", reqSetting.data);
    console.log("AFTER : ", { ...value.afterISP, images: reqSetting.data.src });
    value.setAfterISP({ ...value.afterISP, images: reqSetting.data.src });
  };
  const btnClasses = `${props.className} ${styles.run_isp}`;
  return (
    <button className={btnClasses} onClick={() => runISP()}>
      {language.RUNISP}
    </button>
  );
}
