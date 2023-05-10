import "./userInterface.scss";
import RightPanel from "../../components/RightPanel";
import SideMenu from "../../components/SideMenu";

export default function UserInteface({ activeSection, setActiveSection }) {
  return (
    <div className="userInterface">
      <RightPanel
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <SideMenu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
