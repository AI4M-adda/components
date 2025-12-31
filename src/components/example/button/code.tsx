import { TButton } from "@rgba/ui/components/button";

const Code = ({ children = "Click me", ...props }: TButton) => {
  const filteredProps = Object.fromEntries(
    Object.entries(props || {}).filter(
      ([_, value]) =>
        value !== undefined && value !== null && value !== "" && value !== false
    )
  );

  if (props.size === "icon") {
    return (
      <code className="block mb-2">
        {`<Button size="icon">
  <Mail className="h-4 w-4" />
</Button>`}
      </code>
    );
  }

  return (
    <code className="block mb-2">
      {`<Button ${Object.entries(filteredProps)
        .map(([key, value]) =>
          value === true ? `${key}` : `${key}="${value}"`
        )
        .join(" ")}>${children}</Button>`}
    </code>
  );
};

export default Code;
