import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="Note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteRoundedIcon className="icon" />
      </button>
    </div>
  );
}
