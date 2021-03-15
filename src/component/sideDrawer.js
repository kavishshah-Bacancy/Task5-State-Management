import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import {
  AppBar,
  Card,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";

function SideDrawer({
  user,
  isOpen,
  onClose,
  onHandleChange,
  onSubmit,
  isEdit,
  userFieldError,
}) {
  return (
    <div>
      <SwipeableDrawer anchor="right" open={isOpen} onClose={onClose}>
        <div style={{ padding: "20px" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h8">
                {!isEdit ? "Add" : "Update"} user Details
              </Typography>
            </Toolbar>
          </AppBar>
          <Card style={{ padding: "20px" }}>
            <form onSubmit={onSubmit}>
              <TextField
                style={{ marginBottom: "15px", width: "400px" }}
                name="firstName"
                variant="outlined"
                label="First name"
                placeholder="Please Enter your First name"
                onChange={onHandleChange}
                value={user.firstName}
              />
              {userFieldError.firstName ? (
                <p style={{ marginTop: "-10px", color: "red" }}>
                  Please Enter Firstname
                </p>
              ) : null}
              <br />
              <TextField
                style={{ marginBottom: "15px", width: "400px" }}
                variant="outlined"
                label="Last name"
                name="lastName"
                placeholder="Please Enter your Last name"
                onChange={onHandleChange}
                value={user.lastName}
              />
              {userFieldError.lastName ? (
                <p style={{ marginTop: "-10px", color: "red" }}>
                  Please Enter Lastname
                </p>
              ) : null}
              <br />
              <TextField
                style={{ marginBottom: "15px", width: "400px" }}
                variant="outlined"
                label="Email"
                name="email"
                placeholder="Please Enter Your Email"
                onChange={onHandleChange}
                value={user.email}
              />
              {userFieldError.email ? (
                <p style={{ marginTop: "-10px", color: "red" }}>
                  Please Enter Valid Email
                </p>
              ) : null}
              <br />
              <TextField
                style={{ marginBottom: "15px", width: "400px" }}
                variant="outlined"
                label="Phone"
                name="phone"
                placeholder="Please Enter Your Phone"
                onChange={onHandleChange}
                value={user.phone}
              />
              {userFieldError.phone ? (
                <p style={{ marginTop: "-10px", color: "red" }}>
                  Please Enter Valid Phone
                </p>
              ) : null}
              <br />
              <Button
                style={{ width: "400px" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                {!isEdit ? "Add New User" : "Update User"}
              </Button>
            </form>
          </Card>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default SideDrawer;
