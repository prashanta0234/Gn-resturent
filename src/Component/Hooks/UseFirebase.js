import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import initialize from "../Firebase/Firebase.Initialize";

initialize();

const UseFirebase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoding, setIsloding] = useState(true);

  const googleLogin = (location, history) => {
    setIsloding(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsloding(false));
  };
  const userName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: "name",
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  const registration = (email, password, name, location, history) => {
    setIsloding(true);
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((result) => {
        result.user.displayName = name;
        const destination = location?.state?.from || "/";
        history.replace(destination);
        userName(name);
        setUser(result.user);
        console.log(result.user);
      })
      .catch((erro) => {
        console.log(erro.error);
      })

      .finally(() => setIsloding(false));
  };

  const userLogin = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //   signout
  const logOut = () => {
    setIsloding(true);
    signOut(auth).then(() => {
      setUser({});
    });

    setIsloding(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  return {
    user,
    googleLogin,
    logOut,
    registration,
    isLoding,
    userLogin,
  };
};

export default UseFirebase;
