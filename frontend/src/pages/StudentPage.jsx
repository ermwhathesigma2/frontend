import HeaderContainer from "../components/HeaderContainer";
import FormContainer from "../components/FormContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () => {
    const students = [
    {id: 1, name: "Rey", srcode: "24-139421", program: "BS information Technology1"},
    {id: 2, name: "Rey1", srcode: "24-139422", program: "BS information Technology2"},
    {id: 3, name: "Rey2", srcode: "24-139423", program: "BS information Technology3"},
    ];

    return(
        <>
        <HeaderContainer/>
        <FormContainer/>
        <ListContainer data={students}/>
        </>
    )
}
export default StudentPage;