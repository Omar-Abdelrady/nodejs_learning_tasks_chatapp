import React from "react";
import { Alert, Box } from "@mui/material";

interface Props {
  errors: Array<string> | string;
}
function ErrorAlert(props: Props) {
  console.log(props.errors);
  return (
    <Box>
      {Array.isArray(props.errors) ? (
        props.errors.map((error: any) => (
          <Alert severity="error">
            {error.path} : {error.msg}
          </Alert>
        ))
      ) : (
        <Alert severity="error">{props.errors}</Alert>
      )}
    </Box>
  );
}

export default ErrorAlert;
