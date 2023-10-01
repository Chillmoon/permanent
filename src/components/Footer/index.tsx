import { Button, IconButton } from "@mui/material";
import { Telegram, Instagram } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleDownloadFile = (fileUrl: string, fileName: string) => {
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;
    anchor.click();
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(t("ФОП Ковалевська Юлія Вікторівна")).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (error) => {
        console.error("Error copying text:", error);
      }
    );
  };

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.downloadWrapper}>
        <Button
        // onClick={() =>
        //   handleDownloadFile(
        //     `${process.env.PUBLIC_URL}/docs/terms-of-service.docx`,
        //     "Terms-of-service.docx"
        //   )
        // }
        >
          {t("Публічна оферта")}
        </Button>
        <Button
        // onClick={() =>
        //   handleDownloadFile(
        //     `${process.env.PUBLIC_URL}/docs/privacy-policy.docx`,
        //     "Privacy-policy.docx"
        //   )
        // }
        >
          {t("Політика конфіденційності")}
        </Button>
      </div>
      <div className={classes.linksWrapper}>
        <IconButton href="https://www.google.com/" target="_blank">
          <Instagram />
        </IconButton>
        <IconButton href="https://www.google.com/" target="_blank">
          <Telegram />
        </IconButton>
      </div>
      <div className={classes.downloadWrapper}>
        <Button onClick={handleCopyText} className={classes.notAButton}>
          {copied ? t("Скопійовано!") : t("ФОП Вікторія Кушнір")}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
