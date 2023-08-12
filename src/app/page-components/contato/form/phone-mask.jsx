import { IMaskInput } from "react-imask";

export default function PhoneMask(props, ref) {
  const { onChange, ...other } = props;
  console.log(ref);
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
}
