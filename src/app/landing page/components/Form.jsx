"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiExpandUpDownLine } from "react-icons/ri";
import {
  TextField,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { AiOutlineExclamationCircle } from "react-icons/ai";
// import {StateDropdown} from "./STATE";/

const Form = () => {
  const [selectedState, setSelectedState] = useState("");
  const [receivePrasad, setReceivePrasad] = useState(null);
  // Add a new state variable for the info dialog
  const [openGotraInfo, setOpenGotraInfo] = useState(false);

  // Functions to handle dialog
  const handleOpenGotraInfo = () => setOpenGotraInfo(true);
  const handleCloseGotraInfo = () => setOpenGotraInfo(false);

  const indianStates = [
    { id: 1, name: "Andhra Pradesh" },
    { id: 2, name: "Arunachal Pradesh" },
    { id: 3, name: "Assam" },
    { id: 4, name: "Bihar" },
    { id: 5, name: "Chhattisgarh" },
    { id: 6, name: "Goa" },
    { id: 7, name: "Gujarat" },
    { id: 8, name: "Haryana" },
    { id: 9, name: "Himachal Pradesh" },
    { id: 10, name: "Jharkhand" },
    { id: 11, name: "Karnataka" },
    { id: 12, name: "Kerala" },
    { id: 13, name: "Madhya Pradesh" },
    { id: 14, name: "Maharashtra" },
    { id: 15, name: "Manipur" },
    { id: 16, name: "Meghalaya" },
    { id: 17, name: "Mizoram" },
    { id: 18, name: "Nagaland" },
    { id: 19, name: "Odisha" },
    { id: 20, name: "Punjab" },
    { id: 21, name: "Rajasthan" },
    { id: 22, name: "Sikkim" },
    { id: 23, name: "Tamil Nadu" },
    { id: 24, name: "Telangana" },
    { id: 25, name: "Tripura" },
    { id: 26, name: "Uttar Pradesh" },
    { id: 27, name: "Uttarakhand" },
    { id: 28, name: "West Bengal" },
    { id: 29, name: "Andaman and Nicobar Islands" },
    { id: 30, name: "Chandigarh" },
    { id: 31, name: "Dadra and Nagar Haveli and Daman and Diu" },
    { id: 32, name: "Lakshadweep" },
    { id: 33, name: "Delhi" },
    { id: 34, name: "Puducherry" },
    { id: 35, name: "Ladakh" },
    { id: 36, name: "Jammu and Kashmir" },
  ];

  return (
    <>
      {/* commented out movie display code remains the same */}

      <div className="w-full max-w-lg sm:max-w-xl mx-auto bg-white rounded-lg border border-gray-200">
        {/* Devotee Details */}
        <div className="mx-auto p-6">
          <div className="">
            <h2 className="text-lg text-gray-700 font-bold">
              Enter Devotee Details
            </h2>
            <p className="text-gray-500 text-md">
              Puja will be done by these names & gotra.
            </p>
            <p className="text-gray-500 text-md"> Add up to 1 member</p>
            <TextField
              className="mt-6 w-full rounded-md"
              id="outlined-basic"
              label="Enter devotee name"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.475rem", // Equivalent to Tailwind's rounded-md
                },
                "& .MuiInputLabel-root": { color: "gray" },
                "& .MuiInputLabel-root.Mui-focused": { color: "darkorange" }, // Label color when focused
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "orange",
                }, // Border color when focused
              }}
            />

            <div className="relative w-full">
              <TextField
                className="mt-6 w-full"
                id="outlined-basic"
                label="Enter gotra"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.475rem", // Equivalent to Tailwind's rounded-md
                  },
                  "& .MuiInputLabel-root": { color: "gray" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "darkorange" }, // Label color when focused
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "orange",
                  }, // Border color when focused
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <button
                        type="button"
                        className="p-1"
                        onClick={handleOpenGotraInfo}
                      >
                        <AiOutlineExclamationCircle
                          size={20}
                          className="text-gray-800 hover:text-gray-700"
                        />
                      </button>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-4"></div>

        <div className="mt-4 p-6">
          <h3 className="font-semibold text-lg">
            Do you want to receive prasad for the Puja?
            
          </h3>
          <div className="flex gap-4 mt-2">
            <button
              className={`px-8 py-2 border text-lg rounded-md 
                    ${
                      receivePrasad ? "text-orange-500 border-orange-500" : "text-gray-400 border-gray-300"
               }`}
              onClick={() => setReceivePrasad(true)}
            >
              Yes
            </button>
            <button
  className={`px-8 py-2 border rounded-md text-lg
    ${receivePrasad === false ? "text-orange-500 border-orange-500" : "text-gray-400 border-gray-300"}
  `}
  onClick={() => setReceivePrasad(false)}
>
  No
</button>
          </div>
        </div>

        {/* Prasad Delivery Address */}
        {receivePrasad && (
          <div>
            <div className="p-6">
              <div className="border-t border-gray-300 -mt-6"></div>
              <h3 className="font-semibold mt-6 text-gray-700 text-lg ">
                Prasad Delivery Address
              </h3>
              <div className="flex items-center gap-5 mt-2">
                <TextField
                  className="mt-6 w-1/2 rounded-md"
                  id="outlined-basic"
                  label="Enter pincode"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.475rem", // Equivalent to Tailwind's rounded-md
                    },
                    "& .MuiInputLabel-root": { color: "gray" },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "darkorange",
                    }, // Label color when focused
                    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                      borderColor: "orange",
                    }, // Border color when focused
                  }}
                />
                <button className="text-red-500 flex w-1/2 items-center gap-2">
                  <span className="text-xl"><FaMapMarkerAlt /> </span>Current Location
                </button>
              </div>

              <div className="flex gap-2 mt-2">
                <TextField
                  className="w-1/2 rounded-md"
                  id="outlined-basic"
                  label="Enter City/District"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.475rem", // Equivalent to Tailwind's rounded-md
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "darkorange",
                    }, // Label color when focused
                    "& .MuiInputLabel-root": { color: "gray" },
                    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                      borderColor: "orange",
                    }, // Border color when focused
                  }}
                />
                 <select
      className="w-1/2 p-2 text-gray-500 border rounded-md"
      value={selectedState}
      onChange={(e) => setSelectedState(e.target.value)}
    >
      <option className="text-gray-500" value="">
        Select State 
      </option>
      {indianStates.map((state) => (
        <option key={state.id} value={state.name}>
          {state.name}
        </option>
      ))}
    </select>
              </div>

              <TextField
                className="w-full mt-4 rounded-md"
                id="outlined-basic"
                label="Enter Floor, House No., Building Name"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.475rem", // Equivalent to Tailwind's rounded-md
                  },
                  "& .MuiInputLabel-root": { color: "gray" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "darkorange" }, // Label color when focused
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "orange",
                  }, // Border color when focused
                }}
              />
              <textarea
                type="text"
                placeholder="Road name, Area, Colony"
                className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
             
            </div>
          </div>
        )}
      </div>

      {/* Gotra Info Dialog */}
      <Dialog
        open={openGotraInfo}
        onClose={handleCloseGotraInfo}
        aria-labelledby="gotra-info-dialog-title"
        maxWidth="md"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: "900px", // Adjusted width based on the image
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Subtle shadow like in the image
          },
        }}
      >
        <DialogContent>
          <DialogContentText
            sx={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}
          >
            According to the{" "}
            <span style={{ color: "blue", textDecoration: "underline" }}>
              Upanishads
            </span>
            ,
            <em>
              {" "}
              Kashyapa, Atri, Vasistha, Vishvamitra, Gautama Maharishi,
              Jamadagni, and Bharadvaja
            </em>{" "}
            were seven sages (
            <span style={{ color: "blue", textDecoration: "underline" }}>
              saptarishi
            </span>
            ), and <em>Jambu Maharishi</em> was another sage. The descendants of
            these eight sages are recognized to be gotras.
            <br />
            <br />
            Devotees who are unaware of their gotra or do not follow a gotra
            system should leave the gotra empty. As per pandits, such devotees
            are considered under Kashyap Gotra as Rishi Kashyap was one of the
            primary sages with the most number of followers.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Form;
