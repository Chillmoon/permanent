import { AllCourses } from "../features/AllCourses";

function findBlockLabelById(
  courses: AllCourses,
  courseId: string,
  lessonId: string
) {
  const course = courses.find((c) => c.id === courseId);

  if (course) {
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
