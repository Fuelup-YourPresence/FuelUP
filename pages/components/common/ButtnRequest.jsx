import { Button } from "@mui/material";
import Link from "next/link";

const ButtnRequest = () => {
  const buttonStyle = {
    backgroundColor: "#C4F0AB",
    color: "#153240",
    borderRadius: "0.35rem",
    padding: "8px 30px",
    width: "100%",
    fontWeight: "800",
  };
  // function handleClick() {
  //   const router = useRouter();
  //   router.push('/Home');
  // }
  return (
    <div>
      <Link href="/contact">
        <Button style={buttonStyle}>Request a Quote</Button>
      </Link>
    </div>
  );
};

export default ButtnRequest;
