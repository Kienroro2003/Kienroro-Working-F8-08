import { useEffect, useRef, useState } from "react";

export default function useClickOutSides(dom = "button") {
  const nodeRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    function handleClickOutSide(e) {
      console.log(nodeRef.current);
      console.log(
        nodeRef.current &&
          !nodeRef.current.contains(e.target) &&
          !e.target.matches(dom)
      );
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => document.removeEventListener("click", handleClickOutSide);
  }, []);
  return { show, nodeRef, setShow };
}
