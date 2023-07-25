import { useState } from "react";

export default function usePageControl() {
  
  const [activeSection, setActiveSection] = useState(0);
  const [cameraType, setCameraType] = useState(0);

  return { activeSection, cameraType, setActiveSection, setCameraType };
}
