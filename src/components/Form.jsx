import Input from "./Input";
import Select from "./Select";

const Form = ({ data: { name, sector, agree }, onChange }) => {
  return (
    <form>
      <p>
        Please enter your name and pick the Sectors you are currently involved
        in.
      </p>
      <Input
        onChange={(e) =>
          onChange((data) => ({ ...data, name: e.target.value }))
        }
        name={name}
        label="Name"
      />
      <Select
        onChange={(e) =>
          onChange((data) => ({ ...data, sector: e.target.value }))
        }
        sector={sector}
      />
      <div>
        <input
          onChange={(e) =>
            onChange((data) => ({ ...data, agree: !data.agree }))
          }
          id="terms"
          type="checkbox"
          value={agree}
        />
        <label htmlFor="terms">Agree to terms</label>
      </div>
      <button>Save</button>
    </form>
  );
};
export default Form;
