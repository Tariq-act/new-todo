import {
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";

import { styled } from "@mui/system";
import { useTodoContext } from "@/context/todoContext";

const Navbar = () => {
  const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const router = useRouter();
  const { login, logout } = useTodoContext();
  const fullName = "ABCD";
  const neutralLight = "#F0F0F0";
  const primaryLight = "#F5E6FF";
  const alt = "#FFFFFF";

  //   const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <>
      <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <Typography
          fontWeight="bold"
          fontFamily={"inherit"}
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="#8500FA"
        >
          Task Tracker
        </Typography>

        <FlexBetween gap="2rem">
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,

                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={logout}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      </FlexBetween>
    </>
  );
};

export default Navbar;
