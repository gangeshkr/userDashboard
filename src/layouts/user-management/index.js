import { Link } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/user-management/data";
import { useState } from "react";
import AddUser from "./addUser";

const UserManagement = () => {
  const { columns, rows, columns1, rows1 } = authorsTableData();
  const [ showAddUser, setShowAddUser ] = useState(false)

  const handleAddUser = () => {
    console.log("add User clicked")
    setShowAddUser(true)
  }

  const handleUserAdded = () => {
    setShowAddUser(false);
    // Perform any necessary actions after user is added
  };

  return (


    <DashboardLayout>
      <DashboardNavbar />
      {showAddUser? (<AddUser onUserAdded={handleUserAdded}/>) : 
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Authors Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <MDButton 
                  variant="gradient"
                  color="info"
                  // fullWidth
                  type="button"
                  onClick={handleAddUser}
                  style={{ width: '200px', height: '50px', margin: "20px 0px 20px auto" }}
                >
                  Add User
          </MDButton>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-6}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Users Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: columns1, rows: rows1 }}
                  isSorted={false}
                  entriesPerPage={true}
                  showTotalEntries={true}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>}
      <Footer />
    </DashboardLayout>

  );
};

export default UserManagement;
