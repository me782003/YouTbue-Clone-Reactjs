import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{ position: "sticky", top: 0, backgroundColor: "#0F0F0F", zIndex:'99' }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center", color:'white' }}>
        <img src={logo} alt="logo" height={40} /> <span  className="ms-2 fw-bolder">YouTube Clone</span>
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
