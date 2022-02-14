import { ComposeType } from "../../types/compose-type";

const Compose = ({ components, children }: ComposeType) => {
  return (
    <>
      {components.reverse().reduce((acc: any, curr: any) => {
        const [Provider, props] = Array.isArray(curr)
          ? [curr[0], curr[1]]
          : [curr, {}];
        return <Provider {...props}>{acc}</Provider>;
      }, children)}
    </>
  );
};

export default Compose;
