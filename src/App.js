import "./App.css";
import HelloFunc from "./HelloFunc";
import HelloClass from "./HelloClass";
import UserForm from "./UserForm";
import HelloWithMap from "./HelloWithMap";
import RegistrationForm from "./RegistrationForm";

function App() {
  const friend = ["Mohini", "Abhishek", "Chanchal", "Aman", "Anshul"];
  const friendsDetails = [
    { name: "Mohini", salary: "20k" },
    { name: "Abhishek", salary: "25k" },
    { name: "Chanchal", salary: "22k" },
    { name: "Aman", salary: "20k" },
    { name: "Anshul", salary: "23k" },
  ];
  return (
    <>
      {/* <HelloFunc counter = {0} /> */}
      {/* <HelloClass/> */}
      {/* <UserForm/> */}
      {/* {friend.map((value, index) => (
        <HelloWithMap name={value} key={index} />
      ))}
      {friendsDetails.map((value, index) => (
        <HelloWithMap name={value.name} salary={value.salary} key={index} />
      ))}
      {friendsDetails.map(({ name, salary }, index) => (
        <HelloWithMap name={name} salary={salary} key={index} />
      ))} */}
      <RegistrationForm/>
    </>
  );
}

export default App;
