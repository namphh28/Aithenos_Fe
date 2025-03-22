import { useState, useEffect } from "react";
import { TabButtonFeature } from "@/components/TabButton";
import { FiCheck } from "react-icons/fi";
import {TeacherComponent, SchoolComponent, StudentComponent} from "../_components/feature_component"

export default function Feature() {
  const tabs = ["teacher", "school", "student"];
  const [tab, setTab] = useState(tabs[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          {tabs.map((tabKey) => (
            <TabButtonFeature
              key={tabKey}
              isActive={tab === tabKey}
              action={() => setTab(tabKey)}
            >
              <div className="mx-2">
                {tabKey === "teacher" ? (
                  <button className="flex items-center justify-around py-2 px-[2rem] rounded-full w-auto transition delay-150 duration-300 ease-in-out px-4 md:px-[2rem]">
                    <FiCheck className="hidden md:block"/>
                    <p className="md:pl-4">Giáo Viên</p>
                  </button>
                ) : tabKey === "school" ? (
                  <button className="flex items-center justify-around px-[2rem] py-2  rounded-full w-auto transition delay-150 duration-300 ease-in-out px-4 md:px-[2rem]">
                    <FiCheck className="hidden md:block" />
                    <p className="md:pl-4">Nhà Trường </p>
                  </button>
                ) : (
                  <button className="flex items-center justify-around px-[2rem] py-2 rounded-full w-auto transition delay-150 duration-300 ease-in-out px-4 md:px-[2rem]">
                    <FiCheck className="hidden md:block"/>
                    <p className="md:pl-4">Học Sinh</p>
                  </button>
                )}
              </div>
            </TabButtonFeature>
          ))}
        </div>
        <div>
          {tab === "teacher" && <TeacherComponent />}
          {tab === "school" && <SchoolComponent />}
          {tab === "student" && <StudentComponent />}
        </div>
      </div>
    </>
  );
}
