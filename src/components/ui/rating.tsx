import { useState } from "react";
import clsx from "clsx";
import { IconStar } from "@tabler/icons-react";

interface RatingProps {
  value?: number;
  defaultValue?: number;
  max?: number;
  size?: number;
  editable?: boolean;
  onChange?: (value: number) => void;
}

export default function Rating({
  value,
  defaultValue = 0,
  max = 5,
  size = 22,
  editable = true,
  onChange,
}: RatingProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const current = value ?? internalValue;
  const stars = Array.from({ length: max }, (_, i) => i + 1);

  const handleClick = (v: number) => {
    if (!editable) return;
    setInternalValue(v);
    onChange?.(v);
  };

  return (
    <div className="flex items-center gap-1">
      {stars.map((s) => (
        <IconStar
          key={s}
          onClick={() => handleClick(s)}
          className={clsx(
            "cursor-pointer transition-colors w-5!",
            current >= s
              ? "text-yellow-300 fill-yellow-300"
              : "text-muted-foreground"
          )}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
