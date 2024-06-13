import AppProvider from "./providers/AppProvider";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
