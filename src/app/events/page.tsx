"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import ChecboxCard from "@/components/checkbox-card"
import EventCard from "@/components/event-card"
import ExperienceLevelChecbox from "@/components/experience-level-checkbox"
import OpenedCheckMenu from "@/components/opened-checkbox-menu"
import SalaryRangeCard from "@/components/salary-range-card"
import { eventsData } from "@/data/data"
import { ChevronDown } from "lucide-react"

const EventsPage = () => {
  return (
    <motion.div 
      className="mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
      <div className="mt-10 xl:ml-20 lg:ml-10 md:ml-10 mr-20 flex items-center justify-between max-sm:ml-[26px]">
        <h1 className="text-white text-3xl font-bold">Events</h1>
        <div className="flex items-center gap-1">
          <span className="text-neutralColor text-sm font-semibold max-sm:hidden">Sort by:</span>
          <button className="text-white text-sm font-bold flex items-center gap-[23px]">
            Relevance
            <ChevronDown className="text-neutralColor"/>
          </button>
        </div>
      </div>
      <div className="flex gap-[60px] xl:ml-20 md:ml-10 lg:ml-10 mt-10 mb-10 max-sm:ml-[26px]">
        {/* Left */}
        <motion.div 
          className="lg:flex lg:flex-col gap-7 max-sm:hidden md:hidden"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
        <OpenedCheckMenu
          title="Categories"
          placeholder="Search from List"
        />
        <OpenedCheckMenu
          title="Companies"
          placeholder="Search from List"
          isCategory={true}
        />

        <ChecboxCard
        title='Type Of Employment'
      />
         <ExperienceLevelChecbox
        title='Experience Level'
      />
        <SalaryRangeCard
        title='Salary Range'
      />
       <OpenedCheckMenu
          title="Countries"
          placeholder="Search Countries"
        />
        </motion.div>
        {/* Right */}
        <div className="text-white grid xl:grid-cols-25 lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-19 gap-10">
          {eventsData.map((event) => (
           <motion.div 
            key={event.id}
            variants={itemVariants}
            >
             <EventCard
              title={event.title}
              image={event.image}
              dateDay={event.dateDay}
              dateMonth={event.dateMonth}
              eventBy={event.eventBy}
              time={event.time}
            />
           </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default EventsPage