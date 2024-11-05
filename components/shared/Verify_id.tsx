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
  titleTriger: string;
}
export const Verify_id: NextPage<Props> = ({ titleTriger }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="text-[20px] text-white rounded-[50px] bg-[#205BC9] hover:bg-[#205BC9] px-[50px] py-[4px] hover:opacity-[.9] ">
          {titleTriger}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bottom-[0px] top-[58%] bg-white dark:bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription>Content</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
