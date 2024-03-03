import { FilterModalsProps } from "@/@types";
import React, { useState } from "react";
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

const Parts = ({ isOpen, onClose }: FilterModalsProps) => {
  const { parts, setParts, level, setLevel, subUnit, setSubUnit, selection } =
    useFilter();
  const [partsValue, setPartsValue] = useState("");
  const [levelValue, setLevelValue] = useState<number>();
  const [subunitValue, setSubunitValue] = useState("");
  const handleParts: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    onClose();
    console.log(selection);
    switch (selection) {
      case "subunit":
        setParts("");
        setSubUnit(subunitValue);
        setLevel(null);
        break;
      case "parts":
        setParts(partsValue);
        setSubUnit("");
        setLevel(null);
        break;
      case "level":
        setParts("");
        setSubUnit("");
        setLevel(levelValue ?? null);
        break;
      case "subunit and part":
        setParts(partsValue);
        setSubUnit(subunitValue);
        setLevel(null);
        break;
      case "subunit and level":
        setParts(partsValue);
        setSubUnit("");
        setLevel(levelValue ?? null);
        break;
      case "part, subunit and level":
        setParts(partsValue);
        setSubUnit(subunitValue);
        setLevel(levelValue ?? null);
        break;

      default:
      // Handle default case or do nothing
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent>
          <ModalHeader>{selection}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleParts}>
            <ModalBody pb={6}>
              {selection === "parts" && (
                <FormControl>
                  <FormLabel>Type only one part</FormLabel>
                  <Input
                    placeholder="Soprano Alto Tenor Drums Keyboard ..."
                    value={partsValue}
                    onChange={(e) => {
                      setPartsValue(e.target.value);
                    }}
                  />
                </FormControl>
              )}
              {selection === "subunit" && (
                <FormControl>
                  <FormLabel>Type only one subunit</FormLabel>
                  <Input
                    placeholder="TOP or HOD ..."
                    value={subunitValue}
                    onChange={(e) => {
                      setSubunitValue(e.target.value);
                    }}
                  />
                </FormControl>
              )}
              {selection === "level" && (
                <FormControl>
                  <FormLabel>Type only one level</FormLabel>
                  <Input
                    placeholder="Level ..."
                    value={levelValue}
                    onChange={(e) => {
                      setLevelValue(Number(e.target.value));
                    }}
                  />
                </FormControl>
              )}
              {selection === "subunit and level" && (
                <FormControl>
                  <FormLabel>Insert subunit and level</FormLabel>
                  <Input
                    placeholder="TOP or HOD ..."
                    value={subunitValue}
                    onChange={(e) => {
                      setSubunitValue(e.target.value);
                    }}
                  />
                  <Input
                    placeholder="Level ..."
                    value={levelValue}
                    onChange={(e) => {
                      setLevelValue(Number(e.target.value));
                    }}
                  />
                </FormControl>
              )}
              {selection === "subunit and part" && (
                <FormControl>
                  <FormLabel>Insert the subunit and part</FormLabel>
                  <Input
                    placeholder="TOP or HOD..."
                    value={subunitValue}
                    onChange={(e) => {
                      setSubunitValue(e.target.value);
                    }}
                  />
                  <Input
                    placeholder="Soprano Alto Tenor Drums Keyboard ..."
                    value={partsValue}
                    onChange={(e) => {
                      setPartsValue(e.target.value);
                    }}
                  />
                </FormControl>
              )}
              {selection === "parts, subunit and level" && (
                <FormControl>
                  <FormLabel>Insert the subunit, level part</FormLabel>
                  <Input
                    placeholder="Soprano Alto Tenor Drums Keyboard ..."
                    value={partsValue}
                    onChange={(e) => {
                      setPartsValue(e.target.value);
                    }}
                  />
                  <Input
                    placeholder="TOP or HOD..."
                    value={subunitValue}
                    onChange={(e) => {
                      setSubunitValue(e.target.value);
                    }}
                  />
                  <Input
                    placeholder="Level ..."
                    value={levelValue}
                    onChange={(e) => {
                      setLevelValue(Number(e.target.value));
                    }}
                  />
                </FormControl>
              )}
            </ModalBody>
            <ModalFooter>
              <button type="submit">Save</button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Parts;
