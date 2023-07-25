import "./userInterface.scss";
import RightPanel from "../../components/RightPanel";
import SideMenu from "../../components/SideMenu";
import usePage from "../../stores/usePage.jsx";

export default function UserInteface() {
  const changeActiveSection = usePage((state) => state.changeActiveSection);
  const activeSection = usePage((state) => state.activeSection);
  return (
    <div className="userInterface">
      <RightPanel
        activeSection={activeSection}
        setActiveSection={changeActiveSection}
      />
      <SideMenu
        activeSection={activeSection}
        setActiveSection={changeActiveSection}
      />
    </div>
  );
}
