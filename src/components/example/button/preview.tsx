import { Button, CopyButton, TButton } from "@rgba/ui/components/button";
import { Mail } from "lucide-react";

const Preview = ({
  children = "Click me",
  ...props
}: TButton & { copyButton?: boolean }) => {
  if (props.size === "icon") {
    return (
      <Button {...props}>
        <Mail className="h-4 w-4" />
      </Button>
    );
  } else if (props.copyButton) {
    return <CopyButton copyText={"Copy Text"} />;
  } else if (props.asChild) {
    return (
      <Button {...props}>
        <div>{children}</div>
      </Button>
    );
  } else return <Button {...props}>{children}</Button>;
};

export default Preview;
