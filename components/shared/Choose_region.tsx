"use client";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'


export function Choose_region() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const t = useTranslations("profile");
  const frameworks = useMemo(() => [
    {
      value: "russia",
      label: "Russia",
    },
    {
      value: "uzbekistan",
      label: "Uzbekistan",
    },
    {
      value: "usa",
      label: "USA",
    },
    {
      value: "china",
      label: "China",
    },
    {
      value: "japan",
      label: "Japan",
    },
  ], [])
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-full justify-between z-[9999] border border-solid border-gray-400 text-[16px] sm:text-[18px] md:text-[19px] xl:text-[20px] 2xl:text-[25px] py-[1rem] lg:py-[1.3rem] xl:py-[1.5rem]"
          role="combobox"
          variant="outline"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select region..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 lg:h-6 lg:w-6 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-[623px] p-0">
        <Command>
          <CommandInput
            className="text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] w-full min-h-[58px]"
            placeholder={t('placeholder')}
          />
          <CommandList>
            <CommandEmpty className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[25px] p-[.5rem]">
              {t('notFound')}
            </CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  className="w-[320px] sm:w-[560px] md:w-[700px]"
                  value={framework.value}
                  onSelect={(currentValue: React.SetStateAction<string>) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
