import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ref, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { RootState } from "../../app/store";
import { storage } from "../../app/features/firebase";
// import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

import useStyles from "./styles";

const HomeworkUploader = ({ lessonID }: { lessonID: string }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [text, setText] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const classes = useStyles();
  const { t } = useTranslation();

  const userId = useSelector((state: RootState) => state.user.user?.uid);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (uploadSuccess) {
      const timeout = setTimeout(() => {
        setUploadSuccess(false);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [uploadSuccess]);

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
    setUploadSuccess(false);
  };

  // const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value);
  // };

  // const createPdfFromText = async (text: string) => {
  //   const pdfDoc = await PDFDocument.create();
  //   const page = pdfDoc.addPage();
  //   const fontSize = 12;

  //   const font = await pdfDoc.embedFont(StandardFonts.TimesRoman); // Используем стандартный шрифт

  //   const textOptions = {
  //     x: 50,
  //     y: page.getHeight() - 50,
  //     size: fontSize,
  //     font: font,
  //     color: rgb(0, 0, 0),
  //   };

  //   page.drawText(text, textOptions);

  //   const pdfBytes = await pdfDoc.save();
  //   console.log(text + " in create after pdfBytes");
  //   return pdfBytes;
  // };

  const handleUpload = async () => {
    // if (userId && (selectedFile || text)) {
    if (userId && selectedFile) {
      const username = user?.email;

      const storageRef = ref(
        storage,
        `users/${username}/homework/${lessonID}/`
      );

      // if (text) {
      //   const pdfBytes = await createPdfFromText(text);
      //   const pdfRef = ref(storageRef, `text.pdf`);

      //   try {
      //     console.log(pdfBytes);
      //     setUploading(true);
      //     await uploadBytes(pdfRef, pdfBytes);
      //     setUploading(false);
      //     setUploadSuccess(true);
      //   } catch (error) {
      //     console.error("Ошибка загрузки: ", error);
      //     setUploadSuccess(false);
      //   }
      // }
      if (selectedFile) {
        const fileRef = ref(storageRef, selectedFile.name);

        try {
          setUploading(true);
          await uploadBytes(fileRef, selectedFile);
          setUploading(false);
          setUploadSuccess(true);
        } catch (error) {
          if (error instanceof Error) {
            alert("Помилка під час завантаження файлу: " + error.message);
          } else {
            alert("Помилка під час завантаження файлу: " + error);
          }
          setUploadSuccess(false);
        }
      }
    }
  };

  return (
    <div className={classes.inputWrapper}>
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        className={classes.input}
      />
      {/* <input
        type="text"
        placeholder="Введіть текст"
        value={text}
        onChange={handleTextChange}
        className={classes.input}
      /> */}
      <button
        onClick={handleUpload}
        // disabled={(!selectedFile && !text) || uploading}
        disabled={!selectedFile || uploading}
        className={classes.inputButton}
      >
        {uploadSuccess ? "Готово!" : t("Завантажити Д/З")}
      </button>
    </div>
  );
};

export default HomeworkUploader;
