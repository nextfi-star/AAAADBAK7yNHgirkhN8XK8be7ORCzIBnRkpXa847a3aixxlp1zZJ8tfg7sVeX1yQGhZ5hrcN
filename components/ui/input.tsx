import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  rightButton?: string;
  onClickRightButton?: () => Promise<void>;
  rightButtonDisabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      rightButton,
      onClickRightButton,
      rightButtonDisabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 pr-10 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          type={type}
          {...props}
        />
        {rightButton && (
          <Button
            className="border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] text-sm h-[30px] absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1"
            onPress={async () =>
              !rightButtonDisabled &&
              onClickRightButton &&
              (await onClickRightButton())
            }
            disabled={rightButtonDisabled}
          >
            {rightButton}
          </Button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
