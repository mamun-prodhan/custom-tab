import "./App.css";
import Tab from "./Tab/Tab";
import TabContent from "./TabContent/TabContent";

function App() {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  // Define onClick actions for each tab
  const handleTabClick = (index) => {
    console.log(`Tab ${index + 1} clicked`);
    // You can add specific logic here for each tab, e.g., fetch data, track clicks, etc.
  };

  return (
    <div className="App">
      <Tab tabs={tabs} onTabClick={handleTabClick}>
        <TabContent>
          <p>This is dynamic content of Tab 1.</p>
        </TabContent>
        <TabContent>
          <p>This is dynamic content of Tab 2.</p>
        </TabContent>
        <TabContent>
          <p>This is dynamic content of Tab 22.</p>
        </TabContent>
      </Tab>
    </div>
  );
}

export default App;
