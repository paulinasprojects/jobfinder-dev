"use client";

import { motion } from "framer-motion";
import AddJobForm from "@/components/add-job-form"

const AddJobPage = () => {
  return (
    <motion.div 
      className="mb-5"
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 1.4, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
    >
      <div className="mt-10 lg:ml-6 xl:ml-20 md:ml-5 max-sm:ml-6">
        <h1 className="text-white text-3xl font-bold">Add New Jobs</h1>
      </div>
      <div>
      <AddJobForm/>
      </div>
    </motion.div>
  )
}

export default AddJobPage