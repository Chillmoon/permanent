import { Button, IconButton, useMediaQuery } from "@mui/material";
import { Telegram, Instagram } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import useStyles from "./styles";

const Footer = ({ isSidebar = false, isTransparent = false }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const isMobileScreen = useMediaQuery("(max-width:1000px)");

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

  return isMobileScreen ? (
    <div className={classes.mobileWrapper}>
      <div className={classes.downloadWrapper}>
        <Button
          onClick={() =>
            handleDownloadFile(
              `${process.env.PUBLIC_URL}/docs/terms-of-service.docx`,
              "Terms-of-service.docx"
            )
          }
        >
          {t("Публічна оферта")}
        </Button>
        <Button
          onClick={() =>
            handleDownloadFile(
              `${process.env.PUBLIC_URL}/docs/payment-and-return.docx`,
              "Payment-and-return.docx"
            )
          }
        >
          {t("Оплата та повернення")}
        </Button>
        <Button
          onClick={() =>
            handleDownloadFile(
              `${process.env.PUBLIC_URL}/docs/privacy-policy.docx`,
              "Privacy-policy.docx"
            )
          }
        >
          {t("Політика конфіденційності")}
        </Button>
      </div>

      <div className={classes.wrapper}>
        <Button onClick={handleCopyText} className={classes.notAButton}>
          {copied ? t("Скопійовано!") : t("ФОП Вікторія Кушнір")}
        </Button>
        <div className={classes.linksWrapper}>
          <IconButton href="https://www.google.com/" target="_blank">
            <img
              style={{ width: 35 }}
              src="../../assets/insta.svg"
              alt="Instagram"
            />
          </IconButton>
          <IconButton href="https://www.google.com/" target="_blank">
            <img
              style={{ width: 35 }}
              src="../../assets/telegram.svg"
              alt="Telegram"
            />
          </IconButton>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={
        isSidebar
          ? classes.footerWrapperSidebar
          : isTransparent
          ? classes.footerWrapperTransparent
          : classes.footerWrapper
      }
    >
      <div className={classes.downloadWrapper}>
        <Button
          onClick={() =>
            handleDownloadFile(
              `${process.env.PUBLIC_URL}/docs/terms-of-service.docx`,
              "Terms-of-service.docx"
            )
          }
        >
          {t("Публічна оферта")}
        </Button>
        <Button
          onClick={() =>
            handleDownloadFile(
              `${process.env.PUBLIC_URL}/docs/payment-and-return.docx`,
              "Payment-and-return.docx"
            )
          }
        >
          {t("Оплата та повернення")}
        </Button>
        <Button
          onClick={() =>
            handleDownloadFile(
              `${process.env.PUBLIC_URL}/docs/privacy-policy.docx`,
              "Privacy-policy.docx"
            )
          }
        >
          {t("Політика конфіденційності")}
        </Button>
      </div>
      <div className={classes.linksWrapper}>
        <IconButton
          href="https://www.instagram.com/permanent.by.kushnir/"
          target="_blank"
        >
          <img
            style={{ width: 35 }}
            src="../../assets/insta.svg"
            alt="Instagram"
          />
        </IconButton>
        <IconButton href="https://www.google.com/" target="_blank">
          <img
            style={{ width: 35 }}
            src="../../assets/telegram.svg"
            alt="Telegram"
          />
        </IconButton>
      </div>
      <div className={classes.downloadWrapper}>
        <Button onClick={handleCopyText} className={classes.notAButton}>
          {copied ? t("Скопійовано!") : t("ФОП Вікторія Кушнір")}
        </Button>
        <div style={{ fontSize: 14, paddingLeft: 10 }}>
          permanent.by.kushnir@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
