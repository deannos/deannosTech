import { useNavigate } from "react-router-dom";

export const useScrollToTop = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // First navigate to the new route
    navigate(path);

    // Then scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return handleNavigation;
};
