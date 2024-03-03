import React, { useState } from "react";
import { FilterModalsProps } from "@/@types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useFilter } from "@/hooks/useFilter";

const AddExcos = ({ isOpen, onClose }: FilterModalsProps) => {
  // const { parts, setParts, level, setLevel, subUnit, setSubUnit, selection } =
  //   useFilter();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [matricNo, setMatricNo] = useState("");
  const [post, setPost] = useState("");

  const submitExco: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(matricNo);
    console.log(post);
  };

  return (
    
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Executives</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={submitExco}>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Matric number</FormLabel>
              <Input
                ref={initialRef}
                placeholder="10CD001234"
                onChange={(e) => {
                  setMatricNo(e.target.value);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Post</FormLabel>
              <Input
                placeholder="Choir Director"
                onChange={(e) => {
                  setPost(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

  );
};

export default AddExcos;
