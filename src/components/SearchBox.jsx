import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import searchIcon from "./../images/ic-search.svg";

const SearchBox = () => {
  return (
    <Box sx={styles.searchBoxContainer}>
      <FormControl sx={styles.searchBoxWrapper} variant="outlined">
        <TextField
          placeholder={"Search"}
          id="searchKeyword"
          type={"text"}
          margin="dense"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="searchKeyword"
                  edge="start"
                  id="searchKeywordButton"
                >
                  <img src={searchIcon} alt="search Icon" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Box>
  );
};

const styles = {
  searchBoxContainer: {
    display: "block",
    justifyContent: "center",
    width: "100%",
  },
  searchBoxWrapper: {
    width: "100%",
    paddingTop: 1,
    paddingBottom: 1,
    "& .MuiFormControl-root": {
      marginTop: 0,
      marginBottom: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: 3,
      height: 5,
    },
    "& .MuiInputLabel-formControl": {
      transform: "translate(14px, 12px) scale(1)",
      fontSize: 16,
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)",
    },
    "& .MuiOutlinedInput-root": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px",
        borderColor: "#CBCBCB",
        borderRadius: 3,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#CBCBCB",
      },
    },
    "& .MuiIconButton-edgeStart": {
      padding: 0,
      color: "#CBCBCB",
    },
  },
};

export default SearchBox;
