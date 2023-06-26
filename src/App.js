import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { StyledEngineProvider } from "@mui/material/styles";
import RoutesComponent from "./routes";
import { Box } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <Box class="main">
          <RoutesComponent />
        </Box>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default App;
