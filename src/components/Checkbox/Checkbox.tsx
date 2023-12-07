import React, { memo } from "react";

interface Props {
  name: string;
  checked: boolean;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ name, checked, onChange }) => (
  <>
    <div>{name}</div>
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
  </>
);

export default memo(Checkbox);
