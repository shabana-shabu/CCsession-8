const car = (props) => {
    return (
      <div style={{ margin:"20px",textAlign:"center",color:"red"}}>
        <h1>
          <u>Details of Car</u>
        </h1>
<ul style={{listStyle: "none"}}>
            <li><b>Engine: </b>
             {props.engine}</li>
            <li><b>GearBox: </b> 
            {props.gearBox}</li>
            <li><b>Type: </b>
            {props.type}</li>
            <li><b>BHP: </b>
            {props.bhp}</li>
            <li><b>Torque: </b>
            {props.torque}</li>
            </ul>
        <h1>
          <u>IgnoredProperties</u>
          </h1>
          <ul style={{listStyle:"none"}}>
          <li><b>SpareWheel:</b>
          {props.spareWheel}</li>
          <li><b>SeatingCapacity:</b>
          {props.seatingCapacity}</li>
          </ul>
      </div>
    );
  };
  export default car;