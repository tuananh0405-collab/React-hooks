import "./Card.scss" 
const Card = (props) => {
  return (
    <div className="card">
      <header>
        <h1>{props.data.name1}</h1>
        <p>{props.data.position}</p>
      </header>
      <body>
        <div className="row">
            <div className="col_left">
                <div>{props.data.dob}</div>
                <div>{props.data.email}</div>
                <div>{props.data.address}</div>
            </div>
            <div className="col_right">
                <div>{props.data.phone}</div>
                <div>{props.data.fb}</div>
                <div>{props.data.sex}</div>
            </div>
        </div>
        <hr/>
      </body>
      <footer>
        <p>this is the footer section.</p>
      </footer>
    </div>
  );
};
export default Card;
