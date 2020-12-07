import React from 'react';
import { useState, useEffect } from 'react';

const MyList = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const ref = props.db.ref("mylist");
    ref.on("value", snapshot => {
      const arr = [];
      snapshot.forEach(el => {
        arr.push(el.val());
      });
      setData(arr);
    });
    // Clean-up function
    return () => ref.off("value");
  }, [props.db]);

  return (
    <div>
      <div className="vh-100 lg:grid lg:grid-cols-2">
        <div className="p-4 md:p-8">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="text-left text-white font-bold text-4xl xl:text-5xl 2xl:text-6xl"><span className="border-b-8 md:border-b-12 lg:border-b-12 border-yellow-500">Kevin's List</span></h2>
          <div className="pt-10 text-3xl xl:text-4xl 2xl:text-5xl text-white">
            <ul>
              { data.map( i => <li key={i.name}>{i.name}</li>) }
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default MyList;