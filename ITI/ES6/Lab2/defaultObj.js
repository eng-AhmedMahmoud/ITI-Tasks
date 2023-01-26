function courseInfo(obj) {
  let defaultValues = {
    courseName: "ES6",
    courseDuration: "3Days",
    courseOwner: "Javascript",
  };
  let Obj = Object.assign({}, defaultValues, obj);

  return `your course name is ${Obj.courseName}. 
your course owner is ${Obj.courseOwner}.
your course duration is ${Obj.courseDuration}.
`;
}

// console.log(courseInfo({ courseName: "Bootstrap", courseDuration: "5days", add: 50 }));
// console.log(courseInfo({ courseName: "Bootstrap", courseDuration: "5days" }));
// console.log(courseInfo({ courseName: "Bootstrap"}));
// console.log(courseInfo());

console.log("#".repeat(20));
console.log(
  courseInfo({
    courseName: "Bootstrap",
    courseDuration: "5days",
    courseOwner: "W3",
  })
);
