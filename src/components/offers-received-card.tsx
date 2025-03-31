"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import JobHistoryTitlteCard from "./job-history-title-card";
import OfferReceivedCard from "./offer-received-card";
import { Card, CardContent } from "./ui/card";
import { offersReceived } from "@/data/data";

const OffersReceivedCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
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
              <motion.div 
                key={offer.location} 
                variants={itemVariants}
              >
                <OfferReceivedCard
                  company={offer.company}
                  contractDuration={offer.contractDuration}
                  image={offer.image}
                  location={offer.location}
                  offeredSalary={offer.offerSalary}
                  role={offer.role}
                />
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default OffersReceivedCard