export default function AddSkills({ image, skill }) {
  return (
    <span className="skill-entry">
      <img class="skill-logo" src={image} />
      <p>{skill}</p>
    </span>
  );
}
