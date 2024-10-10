import JobHistoryTitlteCard from "./job-history-title-card";
import OfferReceivedCard from "./offer-received-card";
import { Card, CardContent } from "./ui/card";
import { offersReceived } from "@/data/data";

const OffersReceivedCard = () => {
  return (
    <div>
      <Card className="w-[290px] max-sm:w-[340px] h-full bg-cardColor border-cardColor rounded-[20px]">
      <CardContent>
          <div>
            <JobHistoryTitlteCard
              title="Offers Received"
              jobNumber={5}
            />
          </div>
          <div className="flex flex-col gap-2.5">
            {offersReceived.map((offer) => (
            <OfferReceivedCard
              company={offer.company}
              contractDuration={offer.contractDuration}
              image={offer.image}
              location={offer.location}
              offeredSalary={offer.offerSalary}
              role={offer.role}
              key={offer.location}
            />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OffersReceivedCard