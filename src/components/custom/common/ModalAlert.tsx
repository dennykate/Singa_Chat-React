import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalAlertProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ModalAlert: React.FC<ModalAlertProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[525px] w-[calc(100%-16px)]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle className="font-normal text-xl">{title}</DialogTitle>
          </div>
          <DialogDescription className="text-start">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" className="sm:mr-1" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" onClick={onConfirm} className="sm:mb-0 mb-2">
            Proceed
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAlert;
