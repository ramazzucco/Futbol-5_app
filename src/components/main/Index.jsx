import React, { useCallback, useEffect, useState } from "react";
import { Route } from "react-router-dom";
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

export default function Main(props) {
   const [ reserves, setReserves ] = useState([]);
   const [ historyreserves, setHistoryreserves ] = useState([]);
   const [ refresh, setRefresh ] = useState(false);

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
      }else{
         qS('.modal-container .my-modal').classList.add('bg-danger');
         qS('.modal-container .content').classList.add('text-white');
         qS('.modal-container .content').innerHTML = `<p>${response.message}</p>`;
         qS('.modal-container').classList.toggle('d-none');
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
      }else{
         qS('.modal-container .my-modal').classList.add('bg-danger');
         qS('.modal-container .content').classList.add('text-white');
         qS('.modal-container .content').innerHTML = `<p>${response.message}</p>`;
         qS('.modal-container').classList.toggle('d-none');
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
            ? qS('head title').innerHTML = 'Dashboard - Futbol 5'
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
            getReserves={getReserves}
            getHistoryReserves={getHistoryReserves}
            setRefresh={setRefresh}
         />

         <Modal />
         <Newreserve reserves={reserves} />

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
            <Statistics
               admin={props.admin}
               setAdmin={props.setAdmin}
            />
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
      </div>
   );
}
