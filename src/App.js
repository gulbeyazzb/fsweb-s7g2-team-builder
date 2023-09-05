import Form from "./components/Form";
import "./App.css";
import Members from "./components/Members";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
function App() {
  const membersInitial = [
    {
      id: 1,
      img: "https://picsum.photos/200/300",
      name: "Gülbeyaz Özer",
      email: "glbzbayram@gmail.com",
      rol: "Front-end developer",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300",
      name: "Mehmet Özer",
      email: "mehmetozer@gmail.com",
      rol: "Back-end developer",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300",
      name: "Maya Özer",
      email: "mayaozer@gmail.com",
      rol: "Full-stack developer",
    },
  ];
  const formDataInitial = {
    name: "",
    email: "",
    rol: "",
  };
  const [formData, setFormData] = useState(formDataInitial);
  const [members, setMembers] = useState(membersInitial);

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.id) {
      //edit
      let updateMember = members.map((member) => {
        if (member.id == formData.id) {
          return formData;
        } else {
          return member;
        }
      });
      setMembers(updateMember);
      //edit
    } else {
      const newMember = {
        ...formData,
        ["img"]: "https://picsum.photos/200/300",
        ["id"]: members[members.length - 1].id + 1,
      };
      setMembers([...members, newMember]);
    }
    setFormData(formDataInitial);
    history.push("/");
  };

  const changeHandler = (e) => {
    let { value, type, name, checked } = e.target;
    value = type == "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
  };

  const editMember = (member) => {
    setFormData(member);
    history.push("/signup");
  };
  return (
    <div>
      <header>
        <nav className="d-flex gap-5 p-3">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/signup" exact>
            New Member
          </NavLink>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <Members members={members} editMember={editMember} />
        </Route>
        <Route path="/signup" exact>
          <Form
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            formData={formData}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
