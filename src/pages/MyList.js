import React from 'react';

const MyList = () => {
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
              <li className="font-medium py-4">App Developer</li>
              <li className="font-medium py-4">Designer</li>
              <li className="font-medium py-4">Photographer</li>
              <li className="font-medium py-4">Keynote Speaker</li>
              <li className="font-medium py-4">Product Manager</li>
              <li className="font-medium py-4">Quater-Million-Miler</li>
              <li className="font-medium py-4">Lacrosse Player</li>
              <li className="font-medium py-4">Chef</li>
              <li className="font-medium py-4">CS:GO Gamer</li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default MyList;