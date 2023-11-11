import { TextField } from "@mui/material";
import "./winnersNavigation.css";
const WinnersNavigation = () => {
  return (
    <nav className="navWin">
      <a href="#" className="navRefWin">
        На главную
      </a>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
    </nav>
  );
};

export default WinnersNavigation;
