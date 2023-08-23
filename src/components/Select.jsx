import { useState } from "react";
import { useStateContext } from "../context/ContextProvider";

const DownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      style={{ width: "20px", height: "20px" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const DropDown = ({ sectors }) => {
  return sectors?.map((sector) => (
    <>
      <p className="item">{sector.name}</p>

      <div style={{ marginLeft: "30px" }}>
        {sector.related.length > 0 && <DropDown sectors={sector.related} />}
      </div>
    </>
  ));
};

const Select = () => {
  const { sectors } = useStateContext();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="select">
      <label htmlFor="sectors">Sectors :</label>
      <div className="selected" onClick={() => setToggle(!toggle)}>
        <p>{sectors.length > 0 && sectors[0].name}</p>
        <DownIcon />
      </div>
      {toggle && (
        <div className="dropDown" onClick={(e) => setToggle(!toggle)}>
          <DropDown sectors={sectors} />
        </div>
      )}
    </div>
  );
};

export default Select;
