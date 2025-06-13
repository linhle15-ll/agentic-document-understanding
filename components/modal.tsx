import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function ModalComponent({ modalTitle, modalContent, buttonName, buttonVariant, buttonColor, buttonAction } : any) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="w-auto h-auto">
      <Button onPress={onOpen} variant={buttonVariant} color={buttonColor}>{buttonName}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}  size="lg">
        <div className="w-auto max-w-5xl min-w-[320px] max-h-[90vh] p-3 sm:overflow-scroll md:overflow-auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{modalTitle}</ModalHeader>
              <ModalBody className="overflow-auto sm:overflow-y-auto p-2">
                <div> {modalContent} </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  {buttonAction}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
        </div>
      </Modal>
    </div>
  );
}
