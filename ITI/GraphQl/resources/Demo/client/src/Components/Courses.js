import { gql, useQuery } from "@apollo/client";

let GetAllCoursesQuery = gql`
                        {
                            courses{
                                id
                                name
                                students{
                                    name
                                }
                            }
                        }
`;



function Courses(){
    let AllCourses = useQuery(GetAllCoursesQuery);
    console.log(AllCourses);
    let RenderCourses = ()=>{
        if(AllCourses.data){
            if(AllCourses.data.courses.length){
                return AllCourses.data.courses.map((c)=>{
                    return (
                        <div key={c.id} className="alert alert-info w-75 m-auto text-center">
                            <h5>Course: {c.name}</h5>
                            <h5>Students: {c.students.length}</h5>
                        </div>
                    )
                })
            }else{
                return (
                    <div>
                        Loading...
                    </div>
                )
            }
        }else{
            return (
                <div>
                    No Content
                </div>
            )
        }
    }
    return (
        <div>
            <h1 className="alert alert-secondary w-50 m-auto text-center mb-2 mt-2">Courses</h1>
            {RenderCourses()}
        </div>
    )
}

export default Courses;