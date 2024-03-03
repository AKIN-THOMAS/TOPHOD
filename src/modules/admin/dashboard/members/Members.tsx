import { GetAllMembers, GetApplicants, GetExecutives, GetFilteredMembers } from "@/http/admin";
import React, { useEffect, useState } from "react";
import styles from "@/styles/DashComp.module.css";
import { IoFilterOutline } from "react-icons/io5";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Box,
  Button,
  Spinner,
} from "@chakra-ui/react";
import Parts from "../components/Modals/Parts";
import { useFilter } from "@/hooks/useFilter";
import { Member } from "@/@types";

const Members = () => {
  const [memberData, setMemberData] = useState<Member[]>([]);
  const [isMember, setIsMember] = useState(false);
  const [error, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const allChoirMembers = async () => {
    try {
      const getMembers = await GetAllMembers(page, size);
      setMemberData(getMembers.responseData.data.users.rows);
      setIsMember(true);
      console.log(`All members: ${memberData}`);
      if (getMembers.response.status !== 200) {
        setError(getMembers.responseData.error);
        setIsMember(false);
      }
    } catch (error) {}
  };
  const allApplicants = async () => {
    try {
      const getMembers = await GetApplicants(page, size);
      setMemberData(getMembers.responseData.data.users.rows);
      setIsMember(true);
      console.log(`All applicants: ${memberData}`);
      if (getMembers.response.status !== 200) {
        setError(getMembers.responseData.error);
        setIsMember(false);
      }
    } catch (error) {}
  };
  const allExecutives = async () => {
    try {
      const getExcos = await GetExecutives();
      setMemberData(getExcos.responseData.data.users.rows);
      setIsMember(true);
      console.log(`All Executives: ${memberData}`);
      if (getExcos.response.status !== 200) {
        setError(getExcos.responseData.error);
        setIsMember(false);
      }
    } catch (error) {}
  };

  const fetchData = async () => {
    try {
      let data;
      if (parts || subUnit || level) {
        console.log("Entered parts, subunit, level");
        console.log(`parts: ${parts}`);
        console.log(`level: ${level}`);
        console.log(`subUnit: ${subUnit}`);
        data = await GetFilteredMembers({
          page,
          size,
          parts: parts ?? undefined,
          subUnit: subUnit ?? undefined,
          level: level ?? undefined,
        });
        console.log(
          `Logs from parts et al: ${data.responseData.data.users.rows}`
        );
      } else {
        console.log("Wrong place");
      }
      setMemberData(data?.responseData.data.users.rows);
      setIsMember(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsMember(false);
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, size, parts, subUnit, level]);

  const handlePageChange = (newPage: number) => {
    console.log("Current page:", newPage);
    setPage(newPage);
  };

  const handleParts = () => {
    onOpen();
    setSelection("parts");
    console.log(selection);
  };
  const handleLevel = () => {
    onOpen();
    setSelection("level");
    console.log(selection);
  };
  const handleSubunit = () => {
    onOpen();
    setSelection("subunit");
    console.log(selection);
  };
  const handleSubunitLevel = () => {
    onOpen();
    setSelection("subunit and level");
    console.log(selection);
  };
  const handleSubunitParts = () => {
    onOpen();
    setSelection("subunit and part");
    console.log(selection);
  };
  const handleSubunitPartsLevel = () => {
    onOpen();
    setSelection("parts, subunit and level");
    console.log(selection);
  };

  const renderTableBody = (memberData: Member[]) => {
    return (
      <>
        {isMember ? (
          <tbody className={styles.tbody}>
            {memberData?.map((value, index) => (
              <tr key={index}>
                <td className={styles.td}>{value?.firstname}</td>
                <td className={styles.td}>{value?.lastname}</td>
                <td className={styles.td}>{value?.subunit}</td>
                <td className={styles.td}>{value?.part}</td>
                <td className={styles.td}>{value?.gender}</td>
                <td className={styles.td}>{value?.roomno}</td>
                <td className={styles.td}>{value?.User?.email}</td>
                <td className={styles.td}>{value?.department}</td>
                <td className={styles.td}>{value?.level}</td>
                <td className={styles.td}>{value?.phonenumber}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <p>No data</p>
        )}
      </>
    );
  };

  return (
    <div className={styles.recent_grid}>
      <div className={styles.attendance}>
        <div className={styles.inside_card}>
          <div className={styles.inside_header}>
            <div>
              <h4>Tabarnacle of Psalms & House of David</h4>
            </div>
            <div className={styles.filter_send}>
              <Menu>
                <MenuButton>
                  <div className={styles.filter}>
                    <button>
                      <IoFilterOutline />
                      <p>Filter</p>
                    </button>
                  </div>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleParts}>
                    <p>Part</p>
                    <Parts isOpen={isOpen} onClose={onClose} />
                  </MenuItem>
                  <MenuItem onClick={handleSubunit}>
                    <p>Sub Unit</p>
                    <Parts isOpen={isOpen} onClose={onClose} />
                  </MenuItem>
                  <MenuItem onClick={handleLevel} value={"Level"}>
                    <p>Level</p>
                    <Parts isOpen={isOpen} onClose={onClose} />
                  </MenuItem>
                  <MenuItem
                    onClick={handleSubunitLevel}
                    value={"Sub Unit and Level"}
                  >
                    <p>Sub Unit and Level</p>
                    <Parts isOpen={isOpen} onClose={onClose} />
                  </MenuItem>
                  <MenuItem
                    onClick={handleSubunitParts}
                    value={"Sub Unit and Level"}
                  >
                    <p>Sub Unit and Part</p>
                    <Parts isOpen={isOpen} onClose={onClose} />
                  </MenuItem>
                  <MenuItem
                    onClick={handleSubunitPartsLevel}
                    value={"Part, Sub Unit and Level"}
                  >
                    <p>Part, Sub Unit and Level</p>
                    <Parts isOpen={isOpen} onClose={onClose} />
                  </MenuItem>
                  <MenuItem onClick={onOpen} value={"Not Active Members"}>
                    <p>Not Active Members</p>
                  </MenuItem>
                  <MenuItem onClick={allApplicants} value={"Applicants"}>
                    <p>Applicants</p>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={allChoirMembers}>Members</MenuItem>
                  <MenuItem onClick={allExecutives}>Executives</MenuItem>
                </MenuList>
              </Menu>
              <div className={styles.send}>
                <button onClick={fetchData}>
                  {/* <IoFilterOutline /> */}
                  <p>Send</p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.inside_body}>
            <div className={styles.table_responsive}>
              <table width="100%" className={styles.table}>
                {isMember ? (
                  <>
                    <thead className={styles.thead}>
                      <tr>
                        <td className={styles.td}>Firstname</td>
                        <td className={styles.td}>Lastname</td>
                        <td className={styles.td}>SubUnit</td>
                        <td className={styles.td}>Part</td>
                        <td className={styles.td}>Gender</td>
                        <td className={styles.td}>RoomNo</td>
                        <td className={styles.td}>Email</td>
                        <td className={styles.td}>Department</td>
                        <td className={styles.td}>Level</td>
                        <td className={styles.td}>Phone</td>
                      </tr>
                    </thead>
                    {renderTableBody(memberData)}
                  </>
                ) : (
                  <>
                    <div className={styles.loading}>
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="#6b2737"
                        size="xl"
                      />
                    </div>
                  </>
                )}
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
  );
};

export default Members;
