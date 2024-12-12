import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const response = useSelector((state) => state.LoginReducer.data);


  return (
    <>
        {!response?<Box sx={{ mt: 5, textAlign: "center" }}>
            <Typography variant="h6">No User Data Available</Typography>
        </Box>:
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
          p: 2,
          border: "1px solid #ccc",
          borderRadius: 2,
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          User Information
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid #ccc",
            p: 1,
            bgcolor: "#f9f9f9",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Field
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Value
          </Typography>
        </Box>
        {Object.entries(response).map(([key, value]) => (
          <Box
            key={key}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              p: 1,
              "&:nth-of-type(even)": { bgcolor: "#f4f4f4" },
            }}
          >
            <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
              {key}
            </Typography>
            <Typography variant="body2">{value}</Typography>
          </Box>
        ))}
      </Box>}
    </>
  );
};

export default Home;