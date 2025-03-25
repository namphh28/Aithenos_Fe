import { useState, useEffect } from "react";
import { TabButtonFeature } from "@/components/TabButton";
import { FiCheck } from "react-icons/fi";
import { TeacherComponent, SchoolComponent, StudentComponent } from "../_components/feature_component";
import { motion } from "framer-motion";

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

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto space-x-2">
          {tabs.map((tabKey) => (
            <motion.div variants={tabVariants} key={tabKey}>
              <TabButtonFeature isActive={tab === tabKey} action={() => setTab(tabKey)}>
                <div className="mx-1">
                  {tabKey === "teacher" ? (
                    <button className="flex items-center justify-around py-2 px-2 md:px-3 rounded-full w-auto transition delay-150 duration-300 ease-in-out whitespace-nowrap text-sm">
                      <FiCheck className="text-sm" />
                      <p className="pl-2">Giáo Viên</p>
                    </button>
                  ) : tabKey === "school" ? (
                    <button className="flex items-center justify-around px-2 md:px-3 py-2 rounded-full w-auto transition delay-150 duration-300 ease-in-out whitespace-nowrap text-sm">
                      <FiCheck className="text-sm" />
                      <p className="pl-2">Nhà Trường</p>
                    </button>
                  ) : (
                    <button className="flex items-center justify-around px-2 md:px-3 py-2 rounded-full w-auto transition delay-150 duration-300 ease-in-out whitespace-nowrap text-sm">
                      <FiCheck className="text-sm" />
                      <p className="pl-2">Học Sinh</p>
                    </button>
                  )}
                </div>
              </TabButtonFeature>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          {tab === "teacher" && <TeacherComponent />}
          {tab === "school" && <SchoolComponent />}
          {tab === "student" && <StudentComponent />}
        </div>
      </div>
    </motion.div>
  );
}