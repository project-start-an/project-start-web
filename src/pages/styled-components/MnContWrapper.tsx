const MnContWrapper = {
  height: "76%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "grey",
};

// Define media query for desktop (e.g., screen width greater than 768px)
const desktopMediaQuery = "@media (min-width: 769px)";

// Add styles for desktop layout
const desktopStyles = {
  flexDirection: "row",
};

export default {
  ...MnContWrapper, // Merge the common styles
  [desktopMediaQuery]: desktopStyles, // Apply desktop styles within the media query
};
