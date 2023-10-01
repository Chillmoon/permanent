import { AllCourses } from "../features/AllCourses";

function findCourseLabelById(courses: AllCourses, courseId: string): string {
  const course = courses.find((course) => course.id === courseId);
  return course ? course.label : "";
}

export default findCourseLabelById;
