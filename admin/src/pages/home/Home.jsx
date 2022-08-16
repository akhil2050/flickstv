
import "./home.scss";
import WidgetSide from "../../components/WidgetSide/WidgetSide";
import WidgetMain from "../../components/WidgetMain/WidgetMain";
export default function Home() {
  
  return (
    <div className="home">    
      <div className="homeWidgets">
        <WidgetSide />
        <WidgetMain />
      </div>
    </div>
  );
}
