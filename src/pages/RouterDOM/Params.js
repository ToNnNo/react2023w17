import { useParams } from "react-router-dom";
import Welcome from "../../component/Welcome";

export default function Params() {
  const params = useParams();

  console.log(params);

  return (
    <>
      <h3>Paramètre d'url</h3>

      <Welcome name={ params.name } />
    </>
  );

}