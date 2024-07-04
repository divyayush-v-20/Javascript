const course = {
    coursename : "fullstack development",
    price : "$0",
    courseInstructor : "Hitesh Choudhary"
}

const {courseInstructor : teacher} = course //destructuring
console.log(teacher);

////Destructuring is used in react components (props)
// const navbar = ({company}) => {

// }
// navbar(company = "google")

// {
//     "name" : "divyayush",
//     "courseName" : "javascript",
//     "price" : "free"
// }
