import CheckBox from "./CheckBox";
import Date from "./Date";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Textarea from "./Textarea";

const FormControls = ({ control, ...rest }) => {
  // console.log(rest);
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <Date {...rest} />;
    default:
      return null;
  }
};

export default FormControls;
