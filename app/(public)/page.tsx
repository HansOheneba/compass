import Assessments from '@/components/home/assessments';
import CallToAction from '@/components/home/cta';
import Features from '@/components/home/features'
import Hero from '@/components/home/hero'
import React from 'react'

const Compass = () => {
  return (
    <>
      <section>
        <Hero
          categories={[
            {
              label: "Career Discovery",
              sub: "Find Your Path",
              img: "/images/hero/school.jpg",
            },
            {
              label: "Skill Assessment",
              sub: "Identify Your Strengths",
              img: "/images/hero/school.jpg",
            },
            {
              label: "Career Transition",
              sub: "Pivot with Confidence",
              img: "/images/hero/school.jpg",
            },
            {
              label: "Global Opportunities",
              sub: "Work Beyond Borders",
              img: "/images/hero/school.jpg",
            },
            {
              label: "Leadership Growth",
              sub: "Advance Your Career",
              img: "/images/hero/school.jpg",
            },
            {
              label: "Advisory Sessions",
              sub: "Talk to Experts",
              img: "/images/hero/school.jpg",
            },
          ]}
        />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <CallToAction/>
      </section>
      <section>
        <Assessments/>
      </section>
    </>
  );
}

export default Compass