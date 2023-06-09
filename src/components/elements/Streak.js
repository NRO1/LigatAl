import classes from "./Streak.module.css";

function Streak(props) {
  return (
    <div>
      <p className={classes.header}>תוצאה מתחילת העונה</p>
      <div>
        {props.data.map((res, idx) => (
          <p
            key={idx}
            className={classes.data}
            style={{ backgroundColor: (res === "W" ? "#29A632" : res === "D" ? "#A6A6A6" : "#BF0B3B") }}
          >
            {`${idx + 1} - ${res}`}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Streak;
