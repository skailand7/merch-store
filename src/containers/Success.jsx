import React from 'react';
import AppContext from "../context/AppContext";
import Map from "../components/Map"
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const {state} = React.useContext(AppContext);
  const {buyer} = state
  const user = buyer[0]?? "uwu"
 const location = useGoogleAddress(buyer[0].address)

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{user.name?user.name:user} Gracias por tu compra!</h2>
        <span>Tu pedido llegara en 3 dias</span>
        <div className="Success-map">
          <Map data={location} />
          </div>
      </div>
    </div>
  );
};

export default Success;
