import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const Members = ({ members, editMember }) => {
  console.log(members);
  return (
    <div className="d-flex w-auto flex-wrap p-2 ">
      {members.map((member) => (
        <Card
          style={{
            width: "30%",
            margin: "auto",
            border: "none",
          }}
        >
          <img
            alt="Sample"
            src={member.img}
            className="h-25 align-self-center"
          />
          <CardBody className="d-flex flex-column align-items-center ">
            <CardTitle tag="h5">{member.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {member.rol}
            </CardSubtitle>
            <CardText>{member.email}</CardText>
            <Button onClick={() => editMember(member)}>Edit</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
export default Members;
