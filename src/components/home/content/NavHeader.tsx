import { Flex, List, ListProps } from "antd";

interface NavHeaderProps {
  items: any;
}
function NavHeader({ items }: NavHeaderProps) {
  return (
    <Flex
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        background: "#fff",
        paddingTop: "32px",
        paddingLeft: "32px",
        paddingRight: "32px",
        paddingBottom: "48px",
        width: "100%",
      }}
    >
      {items}
    </Flex>
  );
}

export default NavHeader;
