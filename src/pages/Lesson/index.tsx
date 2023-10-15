import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

import { courses } from "../../app/features/AllCourses";
import findBlockLabelById from "../../app/functions/findBlockLabelById";
import getLessonById from "../../app/functions/getLessonById";

import SideBar from "../../components/SideBar";
import MobileLesson from "./MobileLesson";
import HomeworkUploader from "../../components/HomeworkUploader";

import useStyles from "./styles";

import retrievePaymentData from "../../app/functions/retrievePaymentData";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const LessonPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { lessonNumber } = useParams();
  const user = useSelector((state: RootState) => state.user.user);

  const blockLabel = findBlockLabelById(
    courses,
    lessonNumber || "block0-lesson1"
  );

  const lesson = getLessonById(courses, lessonNumber || "block0-lesson1");

  const handleDownloadFile = (fileUrl: string, fileName: string) => {
    window.open(fileUrl, "_blank");
  };

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const isPayed = await retrievePaymentData(user?.uid);

        if (isPayed === null) {
          navigate("/courses/fastEyeliner");
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
      }
    };

    checkPaymentStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <div className={classes.smallScreenLessonPage}>
        <MobileLesson courses={courses} />
      </div>
      <div className={classes.lessonPageWrapper}>
        <img
          className={classes.backgroundDetails}
          src="../../assets/backgroundDetails.png"
          alt="details"
        />
        <SideBar />
        <div className={classes.lessonPageMainBlock}>
          <Typography className={classes.moduleLabel}>{blockLabel}</Typography>
          <Typography className={classes.lessonLabel} variant="h5">
            {lesson?.label}
          </Typography>
          <div className={classes.lessonInfo}>
            {lesson?.info?.map((section, index) => (
              <div key={index}>
                {section.title && (
                  <Typography variant="h6">{section.title}</Typography>
                )}

                {section.content && <Typography>{section.content}</Typography>}
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.title}
                    width={section.imageWidth}
                  />
                )}
              </div>
            ))}
            {lesson?.video && (
              <div className={classes.videoPlayerWrapper}>
                {lesson?.video && (
                  <div className={classes.videoPlayerWrapper}>
                    {lesson.video.map(
                      (
                        video: {
                          video: string;
                          cover?: string;
                          text?: string | JSX.Element;
                        },
                        index: number
                      ) => (
                        <>
                          <div className={classes.videoPlayerWrapper}>
                            <ReactPlayer
                              key={index}
                              onContextMenu={(e: {
                                preventDefault: () => any;
                              }) => e.preventDefault()}
                              controls={true}
                              url={video.video}
                              className={classes.videoPlayer}
                              config={{
                                file: {
                                  attributes: {
                                    controlsList: "nodownload",
                                  },
                                },
                              }}
                              light={video.cover}
                            />
                          </div>
                          <span>{video.text}</span>
                        </>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
            {lesson?.file && (
              <div className={classes.fileWrapper}>
                <Typography> {t("Матеріали уроку")}:</Typography>
                {lesson.file.map((file, index) => (
                  <button
                    key={index}
                    className={classes.button}
                    onClick={() =>
                      handleDownloadFile(file.file as string, file.name)
                    }
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        alt=""
                        className={classes.saveIcon}
                        src={"../../assets/saveIcon.svg"}
                      />
                      {file.name}
                    </div>
                  </button>
                ))}
              </div>
            )}
            {lesson?.homework && <HomeworkUploader lessonID={lesson?.id} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonPage;
