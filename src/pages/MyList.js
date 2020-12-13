import React from 'react';
import { useState, useEffect } from 'react';

// https://stackoverflow.com/questions/40774697/how-to-group-an-array-of-objects-by-key
const groupByKey = (list, key) => list.reduce((hash, obj) => ({ ...hash, [obj[key]]: (hash[obj[key]] || []).concat(obj) }), {});
const toPerc = (num) => { return Math.round(num * 100).toFixed(2) + "%" };
const MyList = (props) => {
  const [myList, setMyList] = useState({});
  useEffect(() => {
    // load mylist from firebase
    const ref = props.db.ref("mylist");
    ref.on("value", snapshot => {
      const arr = [];
      snapshot.forEach(el => {
        arr.push(el.val());
      });
      
      const groupedList = groupByKey(arr, "row");
      setMyList(groupedList);
    });
    // Clean-up function
    return () => ref.off("value");
  }, [props.db]);

  return (
    <div>
      <div>
        <div className="p-4 pr-0 pb-0 md:p-8 md:pr-0 md:pb-0">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="text-left text-white font-bold text-4xl xl:text-5xl 2xl:text-6xl"><span className="border-b-8 md:border-b-12 lg:border-b-12 border-yellow-500">Kevin's List</span></h2>
          <div className="pt-10 font-medium text-4xl xl:text-6xl 2xl:text-7xl text-white overflow-x-scroll whitespace-nowrap">

              { 
                Object.entries(myList).map(([k, v]) => {return <div className="py-6" key={k}>
                    {
                      v.map( i => 
                        <span style={{ background: "linear-gradient(90deg, rgb(245, 158, 11) 0%, rgb(245, 158, 11) " + toPerc(i.completion) + ", #ffffff " + toPerc(i.completion)+ ", #ffffff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} className="mr-16" key={i.name}>{i.name}</span>
                      )}
                  </div>
                })
              }

          </div>
        </div>
       
      </div>
    </div>
  );
};
export default MyList;