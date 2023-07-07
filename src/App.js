import React, { Suspense } from "react";
import PublicRoutes from "./routes/PublicRoutes";
import "./i18n";
const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={null}>
        <PublicRoutes />
      </Suspense>
    </React.Fragment>
  );
};

export default App;
