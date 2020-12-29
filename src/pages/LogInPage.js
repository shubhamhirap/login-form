import React, { useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginAs, setLoginAs] = useState("admin");
  const [saveDetails, setSaveDetails] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!!");
    console.log(username, password, loginAs);
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setLoginAs("admin");
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <Label htmlFor="userName" title="Username" />
          <Input
            id="userName"
            extraClass="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group">
          <Label htmlFor="password" title="Password" />
          <Input
            type="password"
            id="password"
            extraClass="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group">
          <Label htmlFor="loginAs" title="Login As" />
          <Dropdown
            id="loginAs"
            extraClass="form-control"
            value={loginAs}
            options={[
              { value: "admin", title: "Admin" },
              { value: "user", title: "User" },
            ]}
            onChange={(e) => setLoginAs(e.target.value)}
          />
        </div>
        <div className="form-group">
          <Label
            htmlFor="save-details"
            title="Save Details"
            className="form-check-label"
          />{" "}
          <Input
            type="checkbox"
            id="save-details"
            class="form-check-input"
            checked={saveDetails}
            onChange={(e) => setSaveDetails(!saveDetails)}
          />
        </div>
        <Button type="submit" extraClass="btn-primary mr-2" title="Login" />
        <Button extraClass="btn-danger" title="Cancel" onClick={handleCancel} />
      </form>
    </>
  );
};

export default LogInPage;
