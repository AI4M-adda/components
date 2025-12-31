import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@rgba/ui/components/select/select";
import { Input } from "@rgba/ui/components/input/input";
import { Checkbox } from "@rgba/ui/components/checkbox";

type TPlaygroundControls = {
  propDefs: any;
  handleChange: (key: string, val: string | number | boolean) => void;
  props: Record<string, any>;
};

export function PlaygroundControls({
  propDefs,
  handleChange,
  props,
}: TPlaygroundControls) {
  return Object.entries(propDefs)?.map(([key, value]) => {
    if (key == "defaultVariants") return null;
    if (Array.isArray(value)) {
      return (
        <div key={key} className="flex items-center gap-2">
          <label className="w-32 font-medium ">{key}</label>
          <Select
            onValueChange={(val) => {
              console.log("rj-chnange", { key, val });
              if (val) {
                handleChange(key, val);
              } else handleChange(key, val);
            }}
            value={props[key]}
          >
            <SelectTrigger className="w-[180px] ">
              <SelectValue placeholder={`Select ${key}`} />
            </SelectTrigger>
            <SelectContent>
              {value.map((v) => (
                <SelectItem
                  key={String(JSON.stringify(v?.props) || v)}
                  value={v?.props || v}
                >
                  {String(v?.label || v)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    } else if (typeof value === "object" && value !== null) {
      return (
        <div key={key} className="flex items-center gap-2">
          <label className="w-32 font-medium ">{key}</label>
          <Select
            onValueChange={(val) => {
              console.log("rj-chnange", { key, val });
              if (val) {
                handleChange(key, val);
              } else handleChange(key, val);
            }}
            value={props[key]}
          >
            <SelectTrigger className="w-[180px] ">
              <SelectValue placeholder={`Select ${key}`} />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(value).map(([subKey, subVal]) => (
                <SelectItem key={subKey} value={subKey}>
                  {String(subKey)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    } else if (typeof value === "boolean") {
      return (
        <div key={key} className="items-center gap-2 inline-flex w-1/2">
          <Checkbox
            id={key}
            checked={!!props[key]}
            onCheckedChange={(checked) => {
              handleChange(key, checked);
            }}
          />
          <label htmlFor={key} className="font-medium  ">
            {key}
          </label>
        </div>
      );
    } else {
      return (
        <div key={key} className="flex items-center gap-2">
          <label className="w-32 font-medium ">{key}</label>
          <Input
            className="border rounded px-2 py-1"
            value={props[key]}
            onChange={(e) => handleChange(key, e.target.value)}
          />
        </div>
      );
    }
  });
}
