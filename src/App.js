import Form from "./components/Form";
import "./App.css";
import Members from "./components/Members";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Yup from "yup";

function App() {
  const membersInitial = [
    {
      id: 1,
      img: "https://picsum.photos/200/300",
      name: "Gülbeyaz Özer",
      email: "glbzbayram@gmail.com",
      rol: "Front-end developer",
      terms: true,
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300",
      name: "Mehmet Özer",
      email: "mehmetozer@gmail.com",
      rol: "Back-end developer",
      terms: true,
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300",
      name: "Maya Özer",
      email: "mayaozer@gmail.com",
      rol: "Full-stack developer",
      terms: true,
    },
  ];
  const formDataInitial = {
    name: "",
    email: "",
    rol: "",
    terms: false,
  };
  const [formData, setFormData] = useState(formDataInitial);
  const [members, setMembers] = useState(membersInitial);
  const [isValid, setValid] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    rol: "",
    terms: "",
  });

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

    Yup.reach(membersFormSchema, name)
      .validate(value)
      .then((res) => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const membersFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("İsim giriniz.")
      .min(3, "en az 3 karakter olmak zorunda"),
    email: Yup.string().required("giriniz").email("Geçerli bir email giriniz!"),
    rol: Yup.string().required("Görevi giriniz"),
    terms: Yup.boolean().oneOf([true], "Şartları kabul ediniz!"),
  });

  const editMember = (member) => {
    setFormData(member);
    history.push("/signup");
  };

  useEffect(() => {
    membersFormSchema.isValid(formData).then((valid) => setValid(valid));
  }, [formData]);

  return (
    <div>
      <header className="bg-secondary p-2 text-center ">
        <nav className="d-flex justify-content-center fs-5 gap-5 p-3">
          <NavLink className="text-decoration-none text-warning" to="/" exact>
            Home
          </NavLink>
          <NavLink
            className="text-decoration-none text-warning"
            to="/signup"
            exact
          >
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
            membersFormSchema={membersFormSchema}
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            formData={formData}
            isValid={isValid}
            errors={errors}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
