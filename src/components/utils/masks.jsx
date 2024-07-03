import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

export const PhoneInputMask = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask={[{ mask: "(00) 0000-0000" }, { mask: "(00) 00000-0000" }]}
      dispatch={(appended, dynamicMasked) => {
        const number = (dynamicMasked.value + appended).replace(/\D/g, "");

        if (number.length > 10) {
          return dynamicMasked.compiledMasks[1];
        }

        return dynamicMasked.compiledMasks[0];
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export const CPFInputMask = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000.000.000-00"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
