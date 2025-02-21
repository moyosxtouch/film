import { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ColorModeContext } from "./utils/ToggleColorMode";
import { fetchToken } from "./utils";
const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: "f776b66f974e650989c3361596435e5c2e956eca572e1d8b807a3e2338fdd0dc/stage",
      host: "v1.alan.app/alanai",
      onCommand: ({ command, mode }) => {
        if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          window.location.href = "/";
        }
      },
    });
  }, [setMode]);

  return null;
};

export default useAlan;
