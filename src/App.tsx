import Button from "./components/Button/Button";
import Icon from "./components/Icon/Icon";
import Text from "./components/Text/Text";

function App() {
  return (
    <>
      <Text variant="h1">Hello </Text>
      <Button variant="outlined">Click Me</Button>
      <Button variant="text" sx={{ gap: 1 }}>
        <Icon name="AddDate" />
        Date
      </Button>
    </>
  );
}

export default App;
