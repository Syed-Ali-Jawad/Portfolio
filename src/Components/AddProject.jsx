import { Card, Image } from "antd";

export default function AddProject({ image, title, description }) {
  return (
    <Card hoverable cover={<Image src={image} />} style={{ width: "40%" }}>
      <Card.Meta title={title} description={description} />
    </Card>
  );
}
