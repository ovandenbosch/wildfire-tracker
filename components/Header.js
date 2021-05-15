import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

export default function Header() {
  return <header className="header">
      <h1><Icon icon={locationIcon}/> Wildfire Tracker (Powered By <a href="https://api.nasa.gov/">NASA</a>)</h1>
  </header>;
}
