import {
  Alert,
  AlertDescription,
  AlertTitle,
  TAlert,
} from "@rgba/ui/components/alert";
import { CircleAlertIcon } from "lucide-react";

const Preview = ({ ...props }: TAlert) => {
  return (
    <Alert {...props}>
      <CircleAlertIcon />
      <div className="flex-1">
        <AlertTitle>New message!</AlertTitle>
        <AlertDescription>12 unread messages. Tap to see.</AlertDescription>
      </div>
    </Alert>
  );
};

export default Preview;
