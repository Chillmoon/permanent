import { AllCourses } from "../features/AllCourses";

function getLessonById(
  courses: AllCourses,
  courseId: string,
  lessonId: string
) {
  const course = courses.find((c) => c.id === courseId);

  if (course) {
    for (const block of course.children) {
      const lesson = block.children.find((lesson) => lesson.id === lessonId);
      if (lesson) {
        return lesson;
      }
    }
  }

  return undefined;
}

export default getLessonById;
