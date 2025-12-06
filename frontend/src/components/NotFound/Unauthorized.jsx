import { useParams } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Unauthorized</h1>
      <p>
        You are not authorized to access this page, if you think <br />
        there is something wrong please contact IT.
      </p>
    </div>
  );
};

export default Unauthorized;
