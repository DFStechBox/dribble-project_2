import styles from "./Button.module.css";

interface Props {
  className: string;
  children: React.ReactNode;
}

function Button({ className, children }: Props) {
  return (
    <button className={`${className} ${styles.button}`}>{children}</button>
  );
}

export default Button;
