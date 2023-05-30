import { Typography } from "@mui/material";
import Image from "next/image";

const Disclaimer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9F8F2",
        height: "100vh",
      }}
    >
      <Image src="/images/desktop.gif" alt="desktop" height={300} width={400} />
      <Typography variant="h5">Currently serving desktop versions</Typography>
    </div>
  );
};

export default Disclaimer;
