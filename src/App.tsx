import { useState } from "react";
import Button from "./components/Button/Button";
import Icon from "./components/Icon/Icon";
import Text from "./components/Text/Text";
import TextInput from "./components/Form/TextInput/TextInput";

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <Text variant="h1">Hello </Text>
      <Button variant="outlined">Click Me</Button>
      <Button variant="text" sx={{ gap: 1 }}>
        <Icon name="AddDate" />
        Date
      </Button>
      {text}
      <TextInput
        formLabel="Your Name"
        control={{
          onChange: (e) => setText(e.target.value),
          placeholder: "Enter your name",
        }}
      />
    </>
  );
}

export default App;
