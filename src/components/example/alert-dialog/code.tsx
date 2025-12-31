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
      {`   <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>`}
    </code>
  );
};

export default Code;
