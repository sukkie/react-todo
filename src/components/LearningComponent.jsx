import FirstComponent from "./FirstComponent";
import { FifthComponent } from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import LearningJavascript from "./LearningJavascript";

export default function LearningComponent() {
  return (
    <>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      <FifthComponent></FifthComponent>
      <LearningJavascript></LearningJavascript>
    </>
  );
}
