import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";


export function useSectionInView(
    sectionName: SectionName,
    treshold = 0.75, ){
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  const {ref, inView} = useInView(
    {
      threshold: treshold,
    }
  );
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }  
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  }
}