import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Button, Input, Modal } from "../components/ui";
import "./LoginPage.css";

export const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box component="section" className="login-page">
      <div className="login-page__form">
        <div>
          <Typography variant="h1">Login page</Typography>
          <Typography className="login-page__description">
            Sign in to access your rooms.
          </Typography>
        </div>

        <Input label="Email" name="email" type="email" />
        <Input label="Password" name="password" type="password" />

        <Button onClick={() => setIsModalOpen(true)}>Sign in</Button>

        <Modal
          open={isModalOpen}
          title="Sign in"
          onClose={() => setIsModalOpen(false)}
        >
          <Typography>Authentication will be added in a future</Typography>
        </Modal>
      </div>
    </Box>
  );
};
