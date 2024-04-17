import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AllCourses } from "../../app/features/AllCourses";
import { RootState } from "../../app/store";

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
  start?: string;
  bonus?: boolean;
}

const TreeView: React.FC<TreeViewProps> = ({ courses, rate }) => {
  const { courseId } = useParams();
  const { t } = useTranslation();
  const selectedCourse = courses.find((course) => course.id === courseId);
  const user = useSelector((state: RootState) => state.user.user);
  const classes = useStyles();

  const renderTree = (nodes: Module[]) => (
    <>
      {nodes.map((node) =>
        node.children ? (
          <Accordion
            key={node.id}
            disableGutters={true}
            elevation={0}
            disabled={node.disabled || (rate === "Rate1" && node.bonus)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
            >
              <div className={classes.blockLabelWrapper}>
                <Typography>{t(node.label)}</Typography>
                {node.start && (
                  <div className={classes.blockStart}>{`${t("відкриття")} ${
                    node.start
                  }`}</div>
                )}
              </div>
            </AccordionSummary>
            <AccordionDetails>{renderTree(node.children)}</AccordionDetails>
          </Accordion>
        ) : node.id.includes("BonusZoom") && rate === "Rate1" ? null : (
          <Link
            key={node.id}
            to={
              (selectedCourse?.id === "fastEyeliner" &&
                rate === "Rate1" &&
                node.id.includes("Bonus")) ||
              (selectedCourse?.id === "hairstrokes" &&
                rate === "Rate1" &&
                node.id.includes("Bonus"))
                ? "#"
                : `/platform/${selectedCourse?.id}/${node.id}`
            }
            data-id={node.id}
            className={
              node.id.includes("Bonus")
                ? (selectedCourse?.id === "fastEyeliner" && rate === "Rate1") ||
                  (selectedCourse?.id === "hairstrokes" && rate === "Rate1") ||
                  node.disabled
                  ? classes.accordionLinksDisabled
                  : classes.accordionLinksBonus
                : node.disabled
                ? classes.accordionLinksDisabled
                : node.id.includes("Special")
                ? classes.accordionLinksBonus
                : selectedCourse?.id === "hairstrokes" &&
                  user?.uid === "TU7JCnd4d2NuU87Zm26QcxbXVrj2" &&
                  !node.id.includes("block0") &&
                  !node.id.includes("block1") &&
                  !node.id.includes("block2")
                ? classes.accordionLinksDisabled
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
