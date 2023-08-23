import { useState } from "react";
import { Form } from "../components";

const View = () => {
  const [data, setData] = useState({
    name: "",
    sector: "",
    agree: false,
  });

  return <Form data={data} onChange={setData} />;
};
export default View;
