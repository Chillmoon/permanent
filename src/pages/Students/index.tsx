import React, { useEffect, useState } from "react";
import { list, ref, getDownloadURL } from "firebase/storage";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Element, scroller } from "react-scroll";

import { storage } from "../../app/features/firebase";
import useStyles from "./styles";

interface FileItem {
  name: string;
  downloadUrl: string;
}

interface LessonItem {
  name: string;
  files: FileItem[];
}

interface StudentItem {
  name: string;
  lessons: LessonItem[];
}

async function getAllHomeworkFiles(): Promise<StudentItem[]> {
  const storageRef = ref(storage, "users");
  const userFolders = await list(storageRef);

  const allHomework: StudentItem[] = [];

  for (const userFolder of userFolders.prefixes) {
    const userStorageRef = ref(storage, userFolder.fullPath);
    const lessons = await list(userStorageRef);

    const student: StudentItem = {
      name: userFolder.name,
      lessons: [],
    };

    for (const lessonFolder of lessons.prefixes) {
      const lessonStorageRef = ref(storage, lessonFolder.fullPath);
      const lessonIdFolders = await list(lessonStorageRef);

      for (const lessonIdFolder of lessonIdFolders.prefixes) {
        const lessonIdStorageRef = ref(storage, lessonIdFolder.fullPath);
        const files = await list(lessonIdStorageRef);

        const lesson: LessonItem = {
          name: lessonIdFolder.name,
          files: [],
        };

        for (const file of files.items) {
          const downloadUrl = await getDownloadURL(file);
          lesson.files.push({
            name: file.name,
            downloadUrl: downloadUrl,
          });
        }

        student.lessons.push(lesson);
      }
    }

    allHomework.push(student);
  }

  return allHomework;
}

const Students: React.FC = () => {
  const classes = useStyles();

  const [allHomework, setAllHomework] = useState<StudentItem[]>([]);

  useEffect(() => {
    async function fetchAllHomework() {
      try {
        const homework = await getAllHomeworkFiles();
        setAllHomework(homework);
      } catch (error) {
        console.error("Error fetching all homework:", error);
      }
    }

    fetchAllHomework();
  }, []);

  const handleDownloadFile = (
    fileUrl: string,
    fileName: string,
    studentIndex: number
  ) => {
    const newWindow = window.open(fileUrl, "_blank");
    if (!newWindow) {
      alert("Popup blocked. Please allow popups for this website.");
    } else {
      scroller.scrollTo(`student${studentIndex}`, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <div className={classes.homePageMainBlockWithoutSidebar}>
      <Typography className={classes.homePageMainBlockTitle}>
        Студенти курсу
      </Typography>
      {allHomework.length === 0 && <div>Loading..</div>}
      <div className={classes.accordionContainer}>
        {allHomework.map((student, studentIndex) => (
          <Element name={`student${studentIndex}`} key={studentIndex}>
            <Accordion className={classes.accordion}>
              <AccordionSummary>
                <Typography>{student.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {student.lessons.map((lesson, lessonIndex) => (
                  <Accordion
                    key={lessonIndex}
                    className={classes.accordionChild}
                  >
                    <AccordionSummary>
                      <Typography>{lesson.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                      <ul className={classes.accordionUl}>
                        {lesson.files.map((file, fileIndex) => (
                          <li className={classes.accordionLi} key={fileIndex}>
                            <Typography className={classes.p}>
                              {file.name}
                            </Typography>
                            <button
                              className={classes.button}
                              onClick={() =>
                                handleDownloadFile(
                                  file.downloadUrl,
                                  file.name,
                                  studentIndex
                                )
                              }
                            >
                              Скачати
                            </button>
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionDetails>
            </Accordion>
          </Element>
        ))}
      </div>
    </div>
  );
};

export default Students;
