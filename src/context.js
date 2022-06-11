import React, { createContext, useEffect, useState } from 'react';
import {
  getDocs,
  addDoc,
  db,
  colRef,
  colStaff,
  colPortfolio,
  deleteDoc,
  doc,
  storage,
} from "./components/firebase/config.js";
import {
  onSnapshot,
  orderBy,
  query,
  where,
  getDoc,
  updateDoc,
} from "firebase/firestore";
const Context = createContext()

const ContextProvider = ( {children} ) => {

    const [tourism, setTourism] = useState([]);
    const [services, setServices] = useState([])
    const [info, setInfo] = useState([])
    const [staff, setStaff] = useState([])
    const [portfolio, setPortfolio] = useState([])

    console.log(services)
    useEffect(() => {
      getDocs(colRef)
        .then((snapshot) => {
          let services = [];
          snapshot.docs.forEach((doc) => {
            services.push({ ...doc.data(), id: doc.id });
          });
          setServices(services);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
      getDocs(colPortfolio)
        .then((snapshot) => {
          let portfolio = [];
          snapshot.docs.forEach((doc) => {
            portfolio.push({ ...doc.data(), id: doc.id });
          });
          setPortfolio(portfolio);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
      getDocs(colStaff)
        .then((snapshot) => {
          let staff = [];
          snapshot.docs.forEach((doc) => {
            staff.push({ ...doc.data(), id: doc.id });
          });
          setStaff(staff);
        })
        .catch((err) => console.log(err));
    }, []);

  useEffect( () => {
    async function getData() {
      let response = await fetch('https://course-api.com/react-tours-project')
      let data = await response.json()   
      console.log(data);
      setTourism(data)
    }
    getData()
  }, [])

  return (
    <Context.Provider value={{tourism, setTourism, info, setInfo, staff, setStaff, services, setServices, staff, setStaff, portfolio}}>
        {children}
    </Context.Provider>
  )
};

export {Context, ContextProvider};
