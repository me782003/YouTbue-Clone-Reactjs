

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from "@mui/material"
import {Navbar, Feed, ChannelDetailsPage, VideoDetailsPage, SearchFeed, } from "./compoents"

const App = ()=>{

   return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#0F0F0F'}}>
         <Navbar />
         <Routes>
            <Route path="/" exact element={<Feed/>} />
            <Route path="/channel/:id" element={<ChannelDetailsPage />} />
            <Route path="/video/:id" element={<VideoDetailsPage/>} />
            <Route path="/search/:searchTerm" element={<SearchFeed/>} />
         </Routes>
      </Box>
    </BrowserRouter>
   )
  }  
  export default App;


