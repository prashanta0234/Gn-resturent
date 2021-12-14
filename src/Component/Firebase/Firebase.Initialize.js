import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";
const initialize = () => {
  initializeApp(firebaseConfig);
};
export default initialize;
