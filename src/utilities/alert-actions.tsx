import React from "react";
import { createRoot } from "react-dom/client";
import ModalAlert from "@/components/custom/common/ModalAlert"; // Adjust the import path accordingly

interface ModalAlertFireProps {
  title: string;
  description: string;
}

const fireModalAlert = ({
  title,
  description,
}: ModalAlertFireProps): Promise<boolean> => {
  return new Promise((resolve) => {
    const modalRoot = document.createElement("div");
    document.body.appendChild(modalRoot);

    const handleConfirm = () => {
      cleanup();
      resolve(true);
    };

    const handleCancel = () => {
      cleanup();
      resolve(false);
    };

    const cleanup = () => {
      root.unmount();
      document.body.removeChild(modalRoot);
    };

    const root = createRoot(modalRoot);
    root.render(
      <ModalAlert
        title={title}
        description={description}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    );
  });
};

const alertActions = ({
  callback,
  title,
  description = "This action cannot be undone. Are you sure you want to proceed?",
}: {
  callback: () => void;
  title: string;
  description: string;
}) => {
  fireModalAlert({
    title,
    description,
  }).then((isConfirmed) => {
    if (isConfirmed) {
      return callback();
    }
  });
};

export default alertActions;
