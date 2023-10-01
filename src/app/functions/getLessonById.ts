import { AllCourses } from "../features/AllCourses";

function getLessonById(course: AllCourses, lessonId: string) {
  for (let module of course) {
    for (let block of module.children) {
      for (let lesson of block.children) {
        if (lesson.id === lessonId) {
          return lesson;
        }
      }
    }
  }
  return undefined;
}

export default getLessonById;
