import { NextPage } from "next";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface Props {
  content: string;
  titleTriger: string;
  title: string;
  className?: string;
  unic?: string
}
export const Alert: NextPage<Props> = ({
  title,
  content,
  titleTriger,
  className,
  unic
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="dark:text-white text-black px-[15px] py-[5px] bg-transparent border border-solid dark:border-white border-black rounded-[50px] text-[14px] xl:!text-[20px] 2xl:!text-[25px] xl:!px-[40px] 2xl:!px-[70px] font-medium h-fit w-[98px] hover:bg-transparent">
          {titleTriger}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[350px] max-h-[254px] !top-[50%] -translate-y-[50%] shadow-[0_0_1px] shadow-white flex flex-col justify-center gap-[55px] modal-freezeClose bg-white dark:bg-[#0c0c0c]">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="items-end gap-[20px]">
          <AlertDialogCancel className="h-fit">Cancel</AlertDialogCancel>
          <AlertDialogAction className="h-fit">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
