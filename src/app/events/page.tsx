import ChecboxCard from "@/components/checkbox-card"
import EventCard from "@/components/event-card"
import ExperienceLevelChecbox from "@/components/experience-level-checkbox"
import OpenedCheckMenu from "@/components/opened-checkbox-menu"
import SalaryRangeCard from "@/components/salary-range-card"
import { eventsData } from "@/data/data"
import { ChevronDown } from "lucide-react"

const EventsPage = () => {
  return (
    <div>
      <div className="mt-10 ml-20 mr-20 flex items-center justify-between max-sm:ml-10">
        <h1 className="text-white text-3xl font-bold">Events</h1>
        <div className="flex items-center gap-1">
          <span className="text-neutralColor text-sm font-semibold">Sort by:</span>
          <span className="text-white text-sm font-bold flex items-center gap-[23px]">
            Relevance
            <ChevronDown className="text-neutralColor"/>
          </span>
        </div>
      </div>
      <div className="flex gap-[60px] ml-20 mt-10 mb-10 max-sm:ml-10">
        {/* Left */}
        <div className="flex flex-col gap-7 max-sm:hidden">
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
        </div>
        {/* Right */}
        <div className="text-white grid xl:grid-cols-25 lg:grid-cols-2 gap-10">
          {eventsData.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              image={event.image}
              dateDay={event.dateDay}
              dateMonth={event.dateMonth}
              eventBy={event.eventBy}
              time={event.time}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventsPage