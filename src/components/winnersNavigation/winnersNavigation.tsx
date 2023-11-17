import { TextField } from "@mui/material";
import "./winnersNavigation.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface person {
  name: string;
  age: number;
  description: string;
  id: number;
  photo: string;
}

const WinnersNavigation = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<person[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const { t } = useTranslation();
  const persons = t("persons", { returnObjects: true });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value === "") {
      const filteredSuggestions = persons.filter((person: person) => {
        if (localStorage.getItem("lastPerson") == person.name) {
          return person;
        }
      });
      setSuggestions(filteredSuggestions);
    } else {
      const filteredSuggestions = persons.filter((person: person) => {
        if (person.name.toLowerCase().includes(value.toLowerCase())) {
          return person;
        }
      });
      setSuggestions(filteredSuggestions);
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setShowHints(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleClickOutside = (event: any) => {
    const tipsBlock = document.querySelector(".tipsBlock");
    const searchBlock = document.querySelector(".searchBlock");
    if (tipsBlock && searchBlock) {
      if (
        !tipsBlock.contains(event.target) &&
        !searchBlock.contains(event.target)
      ) {
        setShowHints(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="navWin">
        <Link to={"/RPI_lab2/"} className="navRefWin">
          {t("winners-nav-tomain")}
        </Link>
        <div className="searchBlock">
          <TextField
            fullWidth={true}
            hiddenLabel
            id="filled-hidden-label-small"
            placeholder={t("winners-nav-placeholder")}
            variant="filled"
            size="small"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <ul className="tipsBlock">
            {(showHints || isFocused) &&
              suggestions.map((suggestion, index) => (
                <li
                  className="tip"
                  key={index}
                  onClick={() => {
                    localStorage.setItem("lastPerson", suggestion.name);
                    navigate(`/RPI_lab2/winners/${suggestion.id}`);
                  }}
                >
                  {suggestion.name}
                </li>
              ))}
          </ul>
        </div>
      </nav>
      <button
        className="nav-toggle-win"
        id="nav-toggle2"
        type="button"
        onClick={() => {
          const nav = document.querySelector(".navWin") || document.body;
          const toggle =
            document.querySelector("#nav-toggle2") || document.body;
          nav.classList.toggle("active");
          toggle.classList.toggle("active");
        }}
      >
        <span className="nav-toggle_item-win">menu</span>
      </button>
    </div>
  );
};

export default WinnersNavigation;
