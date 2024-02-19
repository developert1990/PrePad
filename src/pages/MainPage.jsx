import { PrePadMainTitle } from "../components/PrePadMainTitle";
import { PrePadTable } from "../components/PrePadTable";
import { prePadContactHeader } from "../constants";

export const MainPage = () => {
  return (
    <div id="prepad-main">
      <PrePadMainTitle title="PrePad Contact List" />
      <div className="inner-box">
        <PrePadTable headers={prePadContactHeader} />
      </div>
    </div>
  );
};
