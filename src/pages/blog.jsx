import { FixedSizeList as List } from "react-window";
import NavbarComponent from "../components/navbar_component";
import FooterComponent from "../components/footer_component";

// eslint-disable-next-line react/prop-types
const Column = ({ index, style }) => <div style={style}>Column {index}</div>;

export default function BlogPage() {
  return (
    <>
      <NavbarComponent />
      <div className="mt-20 container mx-auto">
        <List height={200} itemCount={1000} itemSize={100} layout="horizontal" width={1000}>
          {Column}
        </List>
      </div>
      <FooterComponent />
    </>
  );
}
