import { useParams } from "react-router-dom";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AllCourses, InfoSection, Lesson } from "../../app/features/AllCourses";
import HomeworkUploader from "../../components/HomeworkUploader";

import useStyles from "./styles";

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
  const classes = useStyles();
  const { t } = useTranslation();

  const [activeLessons, setActiveLessons] = useState<string[]>([]);

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

  const renderTree = (nodes: Module[]) => (
    <>
      {nodes.map((block: any) => (
        <Grid container key={block.id} className={classes.mobileLessonElement}>
          <Grid item lg={4} xs={12} className={classes.mobileLessonLabel}>
            {block.label}
            <hr className={classes.horizontalLine} />
          </Grid>
          <Grid item lg={8} xs={12}>
            <div className={classes.mobileLessonAccordion}>
              {block.children.map((lesson: Lesson) => (
                <Accordion
                  key={lesson.id}
                  disableGutters={true}
                  elevation={0}
                  expanded={activeLessons.includes(lesson.id)}
                  disabled={lesson?.disabled}
                  onChange={() => handleLessonToggle(lesson.id)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.mobileLessonAccordionSummary}
                  >
                    {lesson.label}
                  </AccordionSummary>
                  <AccordionDetails
                    className={classes.mobileLessonAccordionDetails}
                  >
                    <div className={classes.lessonInfo}>
                      {lesson?.info?.map(
                        (section: InfoSection, index: number) => (
                          <div key={index}>
                            {section.title && (
                              <Typography variant="h6">
                                {section.title}
                              </Typography>
                            )}

                            {section.content && (
                              <Typography>{section.content}</Typography>
                            )}
                            {section.image && (
                              <img
                                src={section.image}
                                alt={section.title}
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
                                url={video.video}
                                width="100%"
                                height="100%"
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
                          <Typography> {t("Матеріали уроку")}:</Typography>
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
              ))}
            </div>
          </Grid>
        </Grid>
      ))}
    </>
  );

  return (
    <div className={classes.mobileLessonWrapper}>
      <div className={classes.courseLabel}>{selectedCourse?.label}</div>
      {selectedCourse && renderTree(selectedCourse.children)}
    </div>
  );
};

export default MobileLesson;
