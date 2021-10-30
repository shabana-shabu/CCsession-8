import React from "react";
import Car from "./Car";

const car = {
  engine: "In Line",
  gearBox: "7 speed",
  type: "automatic",
  spareWheel: "compact",
  seatingCapacity: "6",
  bhp: "97%",
  torque: "370Nm ",
};
const CarDetails = (props) => {
  return (
    <Car engine={car.engine} gearBox={car.gearBox} type={car.type} spareWheel={car.spareWheel} seatingCapacity={car.seatingCapacity} bhp={car.bhp} torque={car.torque}/>
  );
};

export default CarDetails;