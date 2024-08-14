import { Layout } from "antd";
import AppHeader from "./Components/Layout/AppHeader";
import AppSider from "./components/Layout/AppSider";
import AppContent from "./components/Layout/AppContent";

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
