import { AllCourses } from "../features/AllCourses";

function findBlockLabelById(courses: AllCourses, lessonId: string) {
  for (const course of courses) {
    for (const block of course.children) {
      const lessonIds = block.children.map((lesson) => lesson.id);
      if (lessonIds.includes(lessonId)) {
        return block.label;
      }
    }
  }
  return null;
}

export default findBlockLabelById;
