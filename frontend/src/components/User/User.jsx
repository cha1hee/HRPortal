import { useParams } from "react-router-dom";

const UserPage = () => {
  const { idImage } = useParams();

  return (
    <div>
      <h2>page for Users only</h2>
      <p>we only do this for users</p>
    </div>
  );
};

export default UserPage;
