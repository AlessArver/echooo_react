"use client";

import { ChangeEvent } from "react";
import styles from "./index.module.sass";

interface TextAreaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
}
export const TextArea = ({
  value,
  onChange,
  placeholder = "Мой новый текст",
  rows = 5,
  cols = 40,
  maxLength,
  disabled = false,
  className = "",
}: TextAreaProps) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
      disabled={disabled}
      className={styles.textArea}
    />
  );
};
