import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e)=> {
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
    }
  }

  return (
    <div>
      <Paper
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          backgroundColor:'#222222',
          borderRadius: 20,
          border: "1px solid #222222",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
        >
        <input
          type="text"
          style={{backgroundColor:'#222222', color:'#EEEEEE'}}
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <IconButton
          size="small"
          type="submit"
          sx={{
            p: "10px",
            color: "#F1F1F1",
          }}
        >
          <SearchRoundedIcon fontSize="inherit" />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
