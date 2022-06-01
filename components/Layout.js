import Header from "./header/Header";
import MobileHeader from "./header/MobileHeader";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <MobileHeader />
      {children}
    </div>
  );
}
