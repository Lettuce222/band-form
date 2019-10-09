import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Card>
        <Button color="red">
          <Icon name="redo" />
        </Button>
      </Card>
    </div>
  );
};

export default App;
