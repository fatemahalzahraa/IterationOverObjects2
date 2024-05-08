const students = [
  {
    id: 1,
    name: "Alice",
    courses: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Bob",
    courses: ["History", "English", "Math", "Art"],
  },
  {
    id: 3,
    name: "Charlie",
    courses: ["Science", "English", "Music"],
  },
  {
    id: 4,
    name: "David",
    courses: ["Math", "History", "Art", "PE"],
  },
  {
    id: 5,
    name: "Eva",
    courses: ["Science", "Math", "Music"],
  },
  {
    id: 6,
    name: "Frank",
    courses: ["English", "Art"],
  },
  {
    id: 7,
    name: "Grace",
    courses: ["Math", "Science", "English", "Music"],
  },
  {
    id: 8,
    name: "Helen",
    courses: ["History", "Art", "PE"],
  },
  {
    id: 9,
    name: "Ivy",
    courses: ["Science", "English", "Art"],
  },
  {
    id: 10,
    name: "Jack",
    courses: ["Math", "History", "Music"],
  },
];

/**********
  Question 1:
  You have a function getStudentName(student) that:
  - receives a student object
  - returns the name of the student
  Don't forget to uncomment the console.log
  ===
  ANSWER: Alice
  **********/

//function getStudentName = (students) => {
// students.forEach ((student) => {
//console.log (student.name)

const getStudentName = (students) => {
  return students.name;
};
console.log(getStudentName(students[0]));

/**********
    Question 2:
    You have a function that:
    - recieves a student object
    - recieves a course index (number)
    - returns the course at the specified index in the student's courses array
      ===
      ANSWER: Music
    **********/

const getCourse = (student, courseIndex) => {
  return student.courses[courseIndex];
};
console.log(getCourse(students[4], 2));

/**********
    Question 3:
    addCourseToStudent(student, course):
    - recieves a student object
    - recieves a course name (string)
    - adds the course to the student's courses array >> we use course.push 
    - returns the student object
      ===
      ANSWER: 
      {
        id: 8,
        name: 'Helen',
        courses: [ 'History', 'Art', 'PE', 'Physics' ]
      }
      **********/

const addCourseToStudent = (student, course) => {
  student.courses.push(course);
  //it means GO inside student and then enter course and PUSH the given course inside it, when you're
  //done pushing return the whole student object
  return student;
};

console.log(addCourseToStudent(students[7], "Physics"));

/**********
    Question 4:
    countCourses(student):
    - recieves a student object
    - returns the number of courses the student is enrolled in
      ===
      ANSWER: 4
    **********/

const countCourses = (student) => {
  return student.courses.length;

  // Your code here
};
console.log(countCourses(students[1]));

/**********
    Question 5: 🌶️🌶️
    listAllCourses(students):
    - recieves an array of student objects
    - returns an array of all unique course names across all students
      ===
      ANSWER: 
      [
        'Math',    'Science',
        'History', 'English',
        'Art',     'Music',
        'PE'
      ]
    **********/
function listAllCourses(students) {
  // Your code here
}
// console.log(listAllCourses(students));

/**********
    Question 6:
    removeCourseFromStudent(course, student):
    - recieves a student object
    - recieves a course name (string)
    - removes the course from the student's courses array
    - returns the student object
    ===
    ANSWER:
    { id: 7, name: 'Grace', courses: [ 'Math', 'English', 'Music' ] }
    **********/

function removeCourseFromStudent(student, course) {
  student.courses = student.courses.filter((c) => {
    if (c == course) {
      return false;
    } else {
      return true;
    }
  });
  return student;
}
console.log(removeCourseFromStudent(students[6], "Science"));

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function filterArrayToHaveEvenNumbers() {
//   array = array.filter((a) => a % 2 == 0);
//   // remove values
// }
// console.log("BEFORE: ", array);
// filterArrayToHaveEvenNumbers();
// console.log("AFTER: ", array);
/**********
    Question 7:
    findStudentById(studentId, students):
    - recieves a student id (number)
    - recieves an array of student objects
    - returns the student object with the matching id
    ===
    ANSWER: { id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
    //FIND returns only one thing which is required in this question
    **********/

function findStudentById(studentId, students) {
  return students.find((student) => student.id == studentId);
}

// old loooooooong cooooooode
// if (student.id == studentId) {
//     // This code here will not work if this is not true
//   return true;
// } else {
//     // This code here will not work if this is not false
//   return false;
// }

console.log(findStudentById(10, students));

/**********
    Question 8: 🌶️🌶️🌶️
    getStudentsByCourse(course, students):
    - recieves a course name (string)
    - recieves an array of student objects
    - returns an array of student objects who are enrolled in the specified course
    ===
    ANSWER:
    [
    {
      id: 3,
      name: 'Charlie',
      courses: [ 'Science', 'English', 'Music' ]
    },
    { id: 5, name: 'Eva', courses: [ 'Science', 'Math', 'Music' ] },
    {
      id: 7,
      name: 'Grace',
      courses: [ 'Math', 'Science', 'English', 'Music' ]
    },
    { id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
  ]
    **********/

function getStudentsByCourse(course, students) {
  // Your code here
}

// console.log(getStudentsByCourse("Music",students));

//Omar's example regarding iteration method : MAP
//let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(
//   myArray.map((element) => {
//     if (element == 1) {
//       return `${element}st`;
//     } else if (element == 2) {
//       return `${element}nd`;
//     } else if (element == 3) {
//       return `${element}rd`;
//     } else {
//       return `${element}th`;
//     }
//   })
// );
