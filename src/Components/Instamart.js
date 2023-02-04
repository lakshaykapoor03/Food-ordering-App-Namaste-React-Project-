import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
//   const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <h2 className="mt-4">{title}</h2>
      {!isVisible ? (
        <>
        <button className="underline " onClick={() => setIsVisible(!title)}>Show</button>
        </>
      ) : (
        <>
        <button className="underline" onClick={() => setIsVisible(title)}>Hide</button>
        <p>{description}</p>

        </>
      )}
    
    </>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("");
  return (
    <div>
      <Section
        title="Lakshay"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      isVisible={visibleSection==="Lakshay"} 
      setIsVisible={()=>{setIsVisibleSection("Lakshay")}}
      />
      <Section
        title="Akshay"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isVisible={visibleSection==="Akshay"}
      setIsVisible={()=>{setIsVisibleSection("Akshay")}}

      />
      <Section
        title="Swiggy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isVisible={visibleSection==="Swiggy"}
      setIsVisible={()=>{setIsVisibleSection("Swiggy")}}

      />
    </div>
  );
};

export default Instamart;
