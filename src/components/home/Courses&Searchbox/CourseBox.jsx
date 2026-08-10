import CourseBoxItem from "./CourseBoxItem";

export default function CourseBox() {
  return (
    <div
      className={
        "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      }
    >
      <CourseBoxItem />
      <CourseBoxItem />
      <CourseBoxItem />
      <CourseBoxItem />
    </div>
  );
}
