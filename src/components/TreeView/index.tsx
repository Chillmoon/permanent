import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AllCourses } from "../../app/features/AllCourses";

import useStyles from "./styles";

interface TreeViewProps {
  courses: AllCourses;
  rate: any;
}

interface Module {
  id: string;
  label: string;
  disabled?: boolean; // Add 'disabled' property
  children?: Module[];
}

const TreeView: React.FC<TreeViewProps> = ({ courses, rate }) => {
  const { courseId } = useParams();
  const { t } = useTranslation();
  const selectedCourse = courses.find((course) => course.id === courseId);
  const classes = useStyles();

  const renderTree = (nodes: Module[]) => (
    <>
      {nodes.map((node) =>
        node.children ? (
          <Accordion
            key={node.id}
            disableGutters={true}
            elevation={0}
            disabled={node.disabled}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
            >
              <Typography>{t(node.label)}</Typography>
            </AccordionSummary>
            <AccordionDetails>{renderTree(node.children)}</AccordionDetails>
          </Accordion>
        ) : (
          <Link
            key={node.id}
            to={
              selectedCourse?.id === "fastEyeliner" &&
              rate === "Rate1" &&
              node.id.includes("Bonus")
                ? "#"
                : `/platform/${selectedCourse?.id}/${node.id}`
            }
            data-id={node.id}
            className={
              node.id.includes("Bonus")
                ? selectedCourse?.id === "fastEyeliner" && rate === "Rate1"
                  ? classes.accordionLinksDisabled
                  : classes.accordionLinksBonus
                : classes.accordionLinks
            }
          >
            <Typography>{t(node.label)}</Typography>
          </Link>
        )
      )}
    </>
  );

  return (
    <div className={classes.treeViewWrapper}>
      {selectedCourse && renderTree(selectedCourse.children)}
    </div>
  );
};

export default TreeView;
