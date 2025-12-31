import { CopyButton } from "@rgba/ui/components/button";
import React from "react";

export function ExampleRender({
  Preview,
  Code,
  Control,
}: {
  Preview: React.ReactNode;
  Code: React.ReactNode;
  Control: React.ReactNode;
}) {
  return (
    <div className="min-h-[100px] border-2 border-dashed rounded-lg p-4">
      <div className="flex flex-col-reverse xl:flex-row gap-lg">
        <div className="flex-1">
          <div className="mb-8">
            <div className="font-semibold mb-2">Preview</div>
            <div className="border rounded-lg p-4 min-h-[80px] flex flex-wrap items-center justify-center bg-background">
              {Preview}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2 flex items-center justify-between">
              JSX Code
              <CopyButton
                size="sm"
                copyText={() =>
                  document.getElementById("copyText")?.textContent || ""
                }
              />
            </div>
            <div className="border-2 border-dashed rounded-lg p-4 min-h-[100px] bg-background ">
              <pre id="copyText" className=" overflow-x-auto max-w-3xl">
                {Code}
              </pre>
            </div>
          </div>
        </div>
        <div className="lg:w-[300px] space-y-lg border p-lg rounded-md bg-background  ">
          {Control}
        </div>
      </div>
    </div>
  );
}
