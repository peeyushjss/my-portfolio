import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Peeyush Kumar",
    "jobTitle": "Technical Lead & Full-Stack Engineer",
    "url": "https://peeyushkumar.dev", // update to your production domain
    "sameAs": [
      "https://www.linkedin.com/in/peeyushjss",
      "https://peeyushjss.medium.com"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "JSS Academy of Technical Education, Noida"
    },
    "knowsAbout": [
      "Node.js", "React.js", "Express.js", "TypeScript", "AWS", "Microservices",
      "Redis", "MongoDB", "Jest", "CI/CD Pipelines", "API Design", "Agile"
    ],
    "description": "Technical Lead with 11+ years of experience leading cross-functional teams, building cloud-native microservices and performant UI architectures."
  };

  return (
    <Helmet>
      <title>Peeyush Kumar | Technical Lead & Full-Stack Engineer</title>
      <meta name="description" content="Portfolio of Peeyush Kumar, Technical Lead & Full-Stack Developer with 11+ years of experience in microservices, cloud deployments, and frontend scaling." />
      <meta name="keywords" content="Peeyush Kumar, Full Stack Engineer, Technical Lead, React Developer, Node.js, Express, AWS, Microservices, JSS Noida, Cognizant, Kellton, Infogain" />
      <link rel="canonical" href="https://peeyushkumar.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Peeyush Kumar | Technical Lead & Full-Stack Engineer" />
      <meta property="og:description" content="11+ years of design and deployment experience spanning fintech, logistics, CRM, and cloud ecosystems." />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}