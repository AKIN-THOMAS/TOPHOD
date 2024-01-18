import React from "react";
import styles from "@/styles/DashComp.module.css";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { useFilter } from "@/hooks/useFilter";
import Link from "next/link";
import AddExcos from "../components/Modals/AddExcos";

const AdminExcos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handlePageChange = (newPage: number) => {
    console.log("Current page:", newPage);
    setPage(newPage);
  };
  const {
    size,
    page,
    setSize,
    setPage,
    parts,
    subUnit,
    level,
    selection,
    setSelection,
  } = useFilter();

  const executives = [
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
  ];
  const renderTableBody = executives.map((value, index) => {
    return (
      <tbody className={styles.tbody}>
        <tr>
          <td className={styles.td} key={index}>
            {value.Week}
          </td>
          <td className={styles.td} key={index}>
            {value.Held}
          </td>
          <td className={styles.td} key={index}>
            {value.Status}
          </td>
          <td className={styles.td} key={index}>
            {value.Clocked}
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <div>
      <div>
      <div className={styles.cards}>
          <Button onClick={onOpen} className={styles.card}>
            <div className={styles.card_single}>
                <div>
                  <h3>Add Executives</h3>
                </div>
            </div>
          </Button>
          <AddExcos isOpen={isOpen} onClose={onClose}/>
        </div>
      </div>
      <div className={styles.recent_grid}>
        <div className={styles.attendance}>
          <div className={styles.inside_card}>
            <div className={styles.inside_header}>
              <h4>The Executives and Team Leaders</h4>
            </div>
            <div className={styles.inside_body}>
              <div className={styles.table_responsive}>
                <table width="100%" className={styles.table}>
                  <thead className={styles.thead}>
                    <tr>
                      <td className={styles.td}>Week</td>
                      <td className={styles.td}>Held</td>
                      <td className={styles.td}>Status</td>
                      <td className={styles.td}>Clocked</td>
                    </tr>
                  </thead>
                  {renderTableBody}
                </table>
              </div>
            </div>
            <div className={styles.inside_footer}>
            <Box mt="4">
              <Button
                onClick={() => handlePageChange(page - 1)}
                isDisabled={page === 0}
              >
                Previous
              </Button>
              <Button ml="2" onClick={() => handlePageChange(page + 1)}>
                Next
              </Button>
            </Box>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminExcos;
