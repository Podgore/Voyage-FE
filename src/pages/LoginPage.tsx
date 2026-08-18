import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Button, Input, Modal } from "../components/ui";

export const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        px: 3,
        py: 8,
      }}
    >
      <Stack spacing={3} sx={{ maxWidth: 400, width: "100%" }}>
        <div>
          <Typography variant="h1">Login page</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
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
      </Stack>
    </Box>
  );
};
