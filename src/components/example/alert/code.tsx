import { TButton } from "@rgba/ui/components/button";

const Code = ({ children = "Click me", ...props }: TButton) => {
  const filteredProps = Object.fromEntries(
    Object.entries(props || {}).filter(
      ([_, value]) =>
        value !== undefined && value !== null && value !== "" && value !== false
    )
  );

  return (
    <code className="block mb-2">
      {`    <Alert ${Object.entries(filteredProps)
        .map(([key, value]) =>
          value === true ? `${key}` : `${key}="${value}"`
        )
        .join(" ")}>
      <CircleAlertIcon />
      <div className="flex-1">
        <AlertTitle>New message!</AlertTitle>
        <AlertDescription>12 unread messages. Tap to see.</AlertDescription>
      </div>
    </Alert>`}
    </code>
  );
};

export default Code;
