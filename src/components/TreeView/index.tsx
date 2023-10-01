import React from "react";
import { Link, useParams } from "react-router-dom";
import { AllCourses } from "../../app/features/AllCourses";
import useStyles from "./styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface TreeViewProps {
  courses: AllCourses;
}

interface Module {
  id: string;
  label: string;
  disabled?: boolean; // Add 'disabled' property
  children?: Module[];
}

const TreeView: React.FC<TreeViewProps> = ({ courses }) => {
  const { courseId } = useParams();
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
              <Typography>{node.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>{renderTree(node.children)}</AccordionDetails>
          </Accordion>
        ) : (
          <Link
            key={node.id}
            to={`/home/${selectedCourse?.id}/${node.id}`}
            data-id={node.id}
            className={classes.accordionLinks}
          >
            <Typography>{node.label}</Typography>
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
