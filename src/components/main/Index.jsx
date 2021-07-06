import React, { useCallback, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { qS, qSall, urlapi } from "../../functions";
import "./index.css";

// Components.
import Header from "./header/Header";
import Home from "./sections/home/Home";
import History from "./sections/history/History";
import Modal from "../modal/Modal";
import Configpage from "./sections/configpage/Configpage";
import Newreserve from "./sections/Newreserve/Newreserve";
import Configuration from "./sections/configuration/Configuration";
import Statistics from "./sections/statistics/Statistics";
import Admins from "./sections/admins/Admins";

export default function Main(props) {
   const [ reserves, setReserves ] = useState([]);
   const [ historyreserves, setHistoryreserves ] = useState([]);
   const [ refresh, setRefresh ] = useState(false);

   useEffect(() => {
      qS('head title').innerHTML = 'Dashboard';
   },[])

   const getHistoryReserves = useCallback(async () => {
      const url = `${urlapi}/reserves/history`;
      const options = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(props.admin),
      };

      const request = await fetch(url, options);
      const response = await request.json();

      if(response && !response.error){
         setHistoryreserves(response.data)
      }

   },[props.admin]);

   const getReserves = useCallback(async () => {
      const url = `${urlapi}/reserves/`;
      const options = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(props.admin),
      };

      const request = await fetch(url, options);
      const response = await request.json();

      if(response && !response.error){
         setReserves(response.data);
      }

   },[props.admin]);

   const badgeNewreserve = () => {
      const rows = qSall('.field .row');

      if(rows){
         let newreserve = 0;

         rows.forEach( row => {
            if(row.className.includes('reserved')){
               newreserve++
            }
         })

         const title = `new reserve (${newreserve})`;

         newreserve === 0
            ? qS('head title').innerHTML = 'Dashboard'
            : qS('head title').innerHTML = title;
      }
   }

   useEffect(() => {
      setInterval(() => {
         setRefresh(true);
      },1000 * 60 * 5)
   },[getReserves])

   useEffect(() => {
      if(refresh){
         getReserves();
         getHistoryReserves();
         setRefresh(false);
      }
   },[refresh, getHistoryReserves, getReserves])

   useEffect(() => {
      if(!reserves.length) getReserves();
      if(!historyreserves.length) getHistoryReserves();
      badgeNewreserve();
   },[getReserves,getHistoryReserves,reserves,historyreserves])

   const checkReserve = async (field, index, incomming) => {
      if(incomming){
         const url = `${urlapi}/reserves/checked`;
         const options = {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
                 ...props.admin,
                 reserve: {
                     field: field,
                     index: index
                 },
             }),
         };

         const request = await fetch(url, options);
         const response = await request.json();

         if(response) setReserves(response.data);
      }
   };

   return (
      <div className="main w-100 h-100">
         <Header
            admin={props.admin}
            setAdmin={props.setAdmin}
            historyreserves={historyreserves}
            setReserves={setReserves}
            getReserves={getReserves}
            getHistoryReserves={getHistoryReserves}
            setRefresh={setRefresh}
         />

         <Modal />

         <Newreserve
            reserves={reserves}
            setRefresh={setRefresh}
         />

         <Route exact path="/app">
            <Home
               admin={props.admin}
               setAdmin={props.setAdmin}
               reserves={reserves}
               refresh={refresh}
               setRefresh={setRefresh}
               history={historyreserves}
               checkReserve={checkReserve}
            />
         </Route>
         <Route path="/app/history">
            <History
               admin={props.admin}
               setAdmin={props.setAdmin}
               history={historyreserves}
               setHistory={setHistoryreserves}
            />
         </Route>
         <Route path="/app/statistics">
            {
               props.admin.id === 1
                  ? <Statistics
                     admin={props.admin}
                     setAdmin={props.setAdmin}
                     reserves={reserves}
                     history={historyreserves}
                  />
                  : <Redirect to='/app' />
            }
         </Route>
         <Route path="/app/configpage">
            <Configpage
               admin={props.admin}
               setAdmin={props.setAdmin}
               reserves={reserves}
            />
         </Route>
         <Route path="/app/configuration">
            <Configuration
               admin={props.admin}
               setAdmin={props.setAdmin}
               reserves={reserves}
            />
         </Route>
         <Route path="/app/admins">
            {
               props.admin.id === 1
                  ? <Admins
                     admin={props.admin}
                     setAdmin={props.setAdmin}
                  />
                  : <Redirect to='/app' />
            }
         </Route>
      </div>
   );
}
