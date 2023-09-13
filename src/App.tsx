import style from "./App.module.scss";
import { MainPage } from "./pages/MainPage";



interface AppProps {}

export const App = (props: AppProps) => {
  return (
    <div className={style.App}>
      <MainPage />
    </div>
  );
};
