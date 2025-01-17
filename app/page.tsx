// Created by Danielle Bagaforo Meer
// Let's Connect : https://www.linkedin.com/in/algorexph/

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">
      

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-purple-400">LET'S COLLABORATE</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              ROBBY JEAN POMBO, <br />
              DATA SCIENCE & AI PRACTITIONER
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0"> 
            I'm a civil-engineer-turned-ai-professional with experience in Analytics and AI Engineering within insurance, banking, and consultancy sector, leveraging technical background to deliver data driven solutions. I'm also an advocate in campaigning #DSForGood through volunteer projects (i.e. Omdena and Singapore International Foundation), maximizing the power of data to address social issues and make a positive impact.
            </p> 
            <Link href="/projects">
              <Button className="bg-purple-600 hover:bg-purple-700">
                VIEW MY PROJECTS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <Image
                src="https://media.licdn.com/dms/image/v2/C4D03AQH9eNaI91LhcQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1655685408374?e=1742428800&v=beta&t=WmUMFQHRQGkFRdAjsKyvdwUlxUTE4DTqEAWCJHIG6Io" // Change to your Photo Please
                alt="Profile"
                fill
                className="rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FEATURED PROJECTS</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-white p-4 sm:p-6">
              <h2 className="text-xl font-bold text-purple-400 mb-4">{project.title}</h2>
              <div className="relative h-40 sm:h-48 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">PROBLEM:</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.problem}</p>
              <h3 className="text-lg font-semibold mb-2">SOLUTION:</h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">{project.solution}</p>
                <a href = {project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full bg-purple-600 text-white hover:bg-purple-800 hover:text-white">
                  VIEW PROJECT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </a>
            </Card>
          ))}
        </div>
      </section>

      
    </main>
  );
}

// Only your Top 3 Projects

const projects = [
  { 
    title: "Course Recommender System", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&fit=crop",
    problem: "Businesses often struggle to deliver personalized experiences to customers due to inefficient recommendation algorithms, leading to irrelevant product suggestions, decreased engagement, and lost sales opportunities. Customers may feel overwhelmed by choices and disengage when recommendations aren’t tailored to their preferences.",
    solution: "Recommender System uses advanced AI algorithms to provide highly accurate, personalized product recommendations based on individual user behavior and preferences. By analyzing user data in real-time, it enhances the shopping experience, increases conversion rates, and boosts customer satisfaction by delivering relevant and timely suggestions",
    link : "https://github.com/Robby1421/RecommenderSystem"
  },
  {
    title: "Parcel Rescue AI",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&fit=crop",
    problem: "Damaged parcels during transit are a common issue in the logistics and e-commerce industries, leading to customer dissatisfaction, financial losses, and reputational damage. Without an effective system for identifying and managing damaged packages, businesses struggle to quickly address these issues and minimize their impact.",
    solution: "Parcel Rescue uses AI-driven technology to identify and assess damaged parcels in real-time, providing a streamlined process for reporting, tracking, and managing damaged goods. This ensures quicker resolution, reduces customer complaints, and helps companies maintain high standards of service by minimizing losses from damaged shipments.",
    link : "https://robby-parcel-rescue.streamlit.app/"
  },
  {
    title: "Data Governance Agentic AI",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&fit=crop",
    problem: "Organizations struggle to maintain data governance at scale, facing challenges such as inconsistent data quality, complex compliance requirements, and the risk of unauthorized access. These issues can lead to data breaches, regulatory fines, and inefficiencies in data management.",
    solution: "Agentic AI’s Data Governance Agent automates data governance tasks, ensuring compliance with regulations, enforcing access controls, and improving data quality through real-time monitoring. By utilizing AI-driven insights, it streamlines data management, tracks data lineage, and helps organizations maintain secure and compliant data ecosystems.",
    link : "https://github.com/Robby1421/AIR_AI_Engineering_Course_Submission/blob/main/Day_6/DataGovernanceAgent.ipynb"
  },
  
];