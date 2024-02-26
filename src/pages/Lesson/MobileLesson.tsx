import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HlsPlayer from "react-hls-player";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AllCourses, InfoSection, Lesson } from "../../app/features/AllCourses";
import retrievePaymentData from "../../app/functions/retrievePaymentData";
import { RootState } from "../../app/store";

import HomeworkUploader from "../../components/HomeworkUploader";

import useStyles from "./styles";
import findCourseLabelById from "../../app/functions/findCourseLabelById";

interface MobileLessonProps {
  courses: AllCourses;
}

interface Module {
  id: string;
  label: string;
  children?: Module[];
}

const MobileLesson: React.FC<MobileLessonProps> = ({ courses }) => {
  const { courseId } = useParams();
  const selectedCourse = courses.find((course) => course.id === courseId);
  const user = useSelector((state: RootState) => state.user.user);
  //@ts-ignore
  const classes = useStyles({ courseId });
  const { t } = useTranslation();
  const playerRef = React.useRef<HTMLVideoElement | null>(null);

  const [activeLessons, setActiveLessons] = useState<string[]>([]);
  const [rateFastEyeliner, setRateFastEyeliner] = useState(undefined);
  const [rateHairCourse, setRateHairCourse] = useState(undefined);
  const [rateHairCourseDemo, setRateHairCourseDemo] = useState(undefined);

  if (courseId === "hairCourse") {
    document.body.style.background = "#120F0D";
  }

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        if (user) {
          const payedData = await retrievePaymentData(user.uid);
          const fastEyelinerData = payedData?.fastEyeliner;
          const hairCourseData = payedData?.hairCourse;
          const hairCourseDemoData = payedData?.hairCourseDemo;
          if (fastEyelinerData) {
            setRateFastEyeliner(fastEyelinerData.rate);
          }
          if (hairCourseData) {
            setRateHairCourse(hairCourseData.rate);
          }
          if (hairCourseDemoData) {
            setRateHairCourseDemo(hairCourseDemoData.rate);
          }
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkPaymentStatus();
  }, [user]);

  const handleLessonToggle = (lessonId: string) => {
    if (activeLessons.includes(lessonId)) {
      setActiveLessons(activeLessons.filter((id) => id !== lessonId));
    } else {
      setActiveLessons([...activeLessons, lessonId]);
    }
  };

  const handleDownloadFile = (fileUrl: string, fileName: string) => {
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;
    anchor.click();
  };

  const courseLabel = courseId
    ? findCourseLabelById(courses, courseId)
    : "Мій курс";

  const courseRate =
    courseLabel === "CSHMR HAIRSTROKES"
      ? rateHairCourse
      : courseLabel === "HAIRSTROKES"
      ? rateHairCourseDemo
      : rateFastEyeliner;

  console.log(courseRate);

  const renderTree = (nodes: Module[]) => (
    <>
      {nodes.map((block: any) => (
        <Grid container key={block.id} className={classes.mobileLessonElement}>
          <Grid item lg={4} xs={12} className={classes.mobileLessonLabel}>
            {t(block.label)}
            {block.start && (
              <div className={classes.blockStart}>{`${t("відкриття")} ${
                block.start
              }`}</div>
            )}
            <hr className={classes.horizontalLine} />
          </Grid>
          <Grid item lg={8} xs={12}>
            <div className={classes.mobileLessonAccordion}>
              {block.children.map((lesson: Lesson) =>
                lesson.id.includes("BonusZoom") &&
                courseRate === "Rate1" ? null : (
                  <Accordion
                    key={lesson.id}
                    disableGutters={true}
                    elevation={0}
                    expanded={activeLessons.includes(lesson.id)}
                    disabled={
                      lesson?.disabled ||
                      (selectedCourse?.id === "fastEyeliner" &&
                        rateFastEyeliner === "Rate1" &&
                        lesson.id.includes("Bonus")) ||
                      (selectedCourse?.id === "hairstrokes" &&
                        rateHairCourse === "Rate1" &&
                        lesson.id.includes("Bonus")) ||
                      (selectedCourse?.id === "hairstrokes" &&
                        user?.uid === "TU7JCnd4d2NuU87Zm26QcxbXVrj2" &&
                        !lesson.id.includes("block0") &&
                        !lesson.id.includes("block1") &&
                        !lesson.id.includes("block2"))
                    }
                    onChange={() => handleLessonToggle(lesson.id)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      className={classes.mobileLessonAccordionSummary}
                    >
                      {t(lesson.label)}
                    </AccordionSummary>
                    <AccordionDetails
                      className={classes.mobileLessonAccordionDetails}
                    >
                      <div className={classes.lessonInfo}>
                        {lesson?.info?.map(
                          (section: InfoSection, index: number) => (
                            <div key={index}>
                              {section.title && (
                                <div className={classes.textTitle}>
                                  {section.title}
                                </div>
                              )}

                              {section.content && <div>{section.content}</div>}
                              {section.image && (
                                <img
                                  src={section.image}
                                  alt=""
                                  width="100%"
                                  height="100%"
                                />
                              )}
                            </div>
                          )
                        )}
                        {activeLessons.includes(lesson.id) &&
                          lesson?.video &&
                          lesson?.video.map(
                            (
                              video: {
                                video: string;
                                cover?: string;
                                text?: string | JSX.Element;
                              },
                              index: number
                            ) => (
                              <div
                                key={index}
                                className={classes.videoPlayerMobile}
                              >
                                <ReactPlayer
                                  onContextMenu={(e: {
                                    preventDefault: () => any;
                                  }) => e.preventDefault()}
                                  controls={true}
                                  //@ts-ignore
                                  url={t(video.video)}
                                  width="100%"
                                  height="100%"
                                  webkit-playsinline
                                  className={classes.reactPlayerMobile}
                                  config={{
                                    file: {
                                      attributes: {
                                        controlsList: "nodownload",
                                      },
                                    },
                                  }}
                                  light={video.cover}
                                />
                                <span>{video.text}</span>
                              </div>
                            )
                          )}

                        {lesson.file && (
                          <div className={classes.fileWrapper}>
                            <div className={classes.fileDescription}>
                              {t("Матеріали до уроку")}:
                            </div>
                            {lesson.file.map((file, index) => (
                              <button
                                key={index}
                                className={classes.button}
                                onClick={() =>
                                  handleDownloadFile(
                                    file.file as string,
                                    file.name
                                  )
                                }
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
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
                        {lesson?.homework && (
                          <HomeworkUploader lessonID={lesson?.id} />
                        )}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                )
              )}
            </div>
          </Grid>
        </Grid>
      ))}
    </>
  );

  return (
    <div className={classes.mobileLessonWrapper}>
      {selectedCourse && renderTree(selectedCourse.children)}
    </div>
  );
};

export default MobileLesson;
