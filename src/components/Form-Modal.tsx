"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalTrigger,
} from "./ui/animated-modal";
import { SignupForm } from "./Form";
import { Button } from "./ui/moving-border";

export function FormModal() {

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:text-black text-white flex justify-center group/modal-btn">
        <Button className="text-lg">
            Sign In
        </Button>
        </ModalTrigger>
        <ModalBody>
          <SignupForm />
        </ModalBody>
      </Modal>
    </div>
  );
}