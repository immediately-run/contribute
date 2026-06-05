// Root component — immediately.run renders the default export of THIS file.
// The contribute dialog as an app (UI_AS_APPS_SPEC §5.1): it shows the unsaved
// files (editor:read), lets the user pick PR vs direct commit, then streams the
// save via the elevated `contribute()` SDK call. The OAuth token never reaches
// this app — the host holds it and only relays the contribution's stages.
import "./index.css";
import Contribute from "./components/Contribute";

function App() {
  return <Contribute />;
}

export default App;
