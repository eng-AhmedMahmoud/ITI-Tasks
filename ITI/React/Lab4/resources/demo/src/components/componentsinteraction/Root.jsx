import {useState} from 'react';
import Search from './Search';
import Students from './Students';

const Root = () => {
    const [students, setStudents] = useState([
        {id:1,name:"Ahmed"},
        {id:2,name:"Sara"},
        {id:3,name:"Yossef"},
        {id:4,name:"Hadeer"},
    ]);
    const [FilteredArr, setFilteredStudents] = useState(students)
    const handleSearch=(searchWord)=>{
setFilteredStudents(()=>students.filter((std)=>std.name.toLowerCase().includes(searchWord.toLowerCase())));
    }
    return (
        <div>
            <Search handleSearch={handleSearch}></Search>
            <Students stds={FilteredArr}></Students>
        </div>
    );
};

export default Root;