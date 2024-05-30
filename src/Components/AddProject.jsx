import { Card, Image, Button } from "antd";

export default function AddProject({ image, title, description, projectURL }) {
  return (
    <Card
      hoverable
      cover={<Image src={image} />}
      style={{ margin: "1% auto", width: "40%" }}
    >
      <Card.Meta title={title} description={description} />
      {projectURL ? (
        <Button
          target="_blank"
          style={{ margin: "3% auto" }}
          type="primary"
          href={projectURL}
        >
          View Project
        </Button>
      ) : null}
    </Card>
  );
}
