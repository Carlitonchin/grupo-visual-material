import { fontNormal, fontHeader } from "@/app/fonts";

interface props {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "span";
  font: "Normal" | "Custom";
  className?: string;
  children: any;
  onClick?: (a?: any) => void;
  id?: string;
  style?: any;
}

export default function HeaderText({
  variant = "h2",
  font = "Custom",
  className,
  onClick,
  children,
  id,
  style,
}: props) {
  const classNameFont = fontNormal.className;
  switch (variant) {
    case "h1":
      return (
        <h1
          style={style}
          id={id}
          onClick={onClick}
          className={classNameFont + " " + className}
        >
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2
          style={style}
          id={id}
          onClick={onClick}
          className={classNameFont + " " + className}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          style={style}
          id={id}
          onClick={onClick}
          className={classNameFont + " " + className}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          style={style}
          id={id}
          onClick={onClick}
          className={classNameFont + " " + className}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          style={style}
          id={id}
          onClick={onClick}
          className={classNameFont + " " + className}
        >
          {children}
        </h5>
      );
    default:
      return (
        <span
          style={style}
          id={id}
          onClick={onClick}
          className={classNameFont + " " + className}
        >
          {children}
        </span>
      );
  }
}
