// Created by Danielle Bagaforo Meer
// Let's Connect : https://www.linkedin.com/in/algorexph/
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';

// Add your Projects Here
const projects = [
  {
    title: "Course Recommender System",
    image: "https://www.globalcareercounsellor.com/blog/wp-content/uploads/2018/05/Online-Career-Counselling-course.jpg",
    problem: "Businesses often struggle to deliver personalized experiences to customers due to inefficient recommendation algorithms, leading to irrelevant product suggestions, decreased engagement, and lost sales opportunities. Customers may feel overwhelmed by choices and disengage when recommendations aren’t tailored to their preferences.",
    solution: "Recommender System uses advanced AI algorithms to provide highly accurate, personalized product recommendations based on individual user behavior and preferences. By analyzing user data in real-time, it enhances the shopping experience, increases conversion rates, and boosts customer satisfaction by delivering relevant and timely suggestions.",
    tools: ["Python", "RAG", "LLM", "OpenAI API"],
    link : "https://github.com/Robby1421/RecommenderSystem" // Github Link make sure it has https://
  },
  {
    title: "Parcel Rescue AI",
    image: "https://4623783.fs1.hubspotusercontent-na1.net/hub/4623783/hubfs/What%20is%20considered%20small%20parcel%3F.jpg?height=630&name=What%20is%20considered%20small%20parcel%3F.jpg",
    problem: "Damaged parcels during transit are a common issue in the logistics and e-commerce industries, leading to customer dissatisfaction, financial losses, and reputational damage. Without an effective system for identifying and managing damaged packages, businesses struggle to quickly address these issues and minimize their impact.",
    solution: "Parcel Rescue uses AI-driven technology to identify and assess damaged parcels in real-time, providing a streamlined process for reporting, tracking, and managing damaged goods. This ensures quicker resolution, reduces customer complaints, and helps companies maintain high standards of service by minimizing losses from damaged shipments.",
    tools: ["Python", "OpenAI Model", "Streamlit"],
    link : "https://robby-parcel-rescue.streamlit.app/" // Github Link make sure it has https://
  },
  {
    title: "Data Governance Agentic AI",
    image: "https://d3an9kf42ylj3p.cloudfront.net/uploads/2023/04/mk_datagovernancebestpractices-april-23.jpg",
    problem: "Organizations struggle to maintain data governance at scale, facing challenges such as inconsistent data quality, complex compliance requirements, and the risk of unauthorized access. These issues can lead to data breaches, regulatory fines, and inefficiencies in data management.",
    solution: "Agentic AI’s Data Governance Agent automates data governance tasks, ensuring compliance with regulations, enforcing access controls, and improving data quality through real-time monitoring. By utilizing AI-driven insights, it streamlines data management, tracks data lineage, and helps organizations maintain secure and compliant data ecosystems.",
    tools: ["Python", "OpenAI API", "Streamlit", "Pandas"],
    link : "https://github.com/Robby1421/AIR_AI_Engineering_Course_Submission/blob/main/Day_6/DataGovernanceAgent.ipynb" // Github Link make sure it has https://
  },

  
];

// Created by Danielle Bagaforo Meer
// Let's Connect : https://www.linkedin.com/in/algorexph/
export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">ALL PROJECTS</h1>
        <p className="text-gray-400 mb-8 sm:mb-12">Exploring the intersection of AI and real-world solutions</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-500/40 transition-all duration-300">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 saturate-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
              </div>
              
              <div className="p-6 space-y-6">
                <h3 className="text-xl font-bold text-purple-400 tracking-tight">{project.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-3">PROBLEM:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-3">SOLUTION:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium tracking-wide py-2.5"
                      >
                        VIEW PROJECT
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
