import PropTypes from "prop-types";
import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

RHFTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFTextField({ name, label, helperText, type }) {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-3">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-textColor">
              {label}
            </label>
            <input
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg pr-10 block w-full p-2.5"
              required
              {...field}
              type={type}
              placeholder={helperText}
              value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
            />
          </>
        )}
      />
    </div>
  );
}
