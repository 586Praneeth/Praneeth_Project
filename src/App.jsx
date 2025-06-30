import React from "react";
import profile from "./data/profile";
import projects from "./data/projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./index.css";

function App() {useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  return (
<div className="min-h-screen bg-gray-50 text-gray-900 font-sans px-4 pt-6 pb-12 relative w-full">
      {/* ✅ Top-right certification badges */}
    

      {/* ✅ Main Profile Content */}
      <div className="mt-12">
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mt-4 mb-6">
 <img src={`${import.meta.env.BASE_URL}aws.jpg`} alt="AWS Certified Developer" className="w-28 h-28 md:w-32 md:h-32" />
<img src={`${import.meta.env.BASE_URL}azure.jpg`} alt="Azure Developer Associate" className="w-28 h-28 md:w-32 md:h-32" />
<img src={`${import.meta.env.BASE_URL}mta.jpg`} alt="Microsoft MTA" className="w-28 h-28 md:w-32 md:h-32" />


</div>

        <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in-up">{profile.name}</h1>
        <h2 className="text-xl text-gray-600 mb-1">FULL STACK DEVELOPER</h2>
        <h2 className="text-lg text-gray-500 mb-2 italic">Masters in Computer Science from University of Central Missouri</h2>
        <h2 className="text-xl text-gray-600 mb-4">{profile.location}</h2>

        <p className="text-md md:text-lg leading-relaxed mb-6 whitespace-pre-line">I'm a Full Stack Developer with a strong foundation in building scalable, secure, and cloud-native applications using Java, Spring Boot, React, and AWS. I specialize in designing microservices, automating deployments with CI/CD pipelines, and crafting intelligent solutions across domains like healthcare, finance, and embedded systems. With a passion for problem-solving through data structures and clean system architecture, I also believe that leveraging AI can significantly enhance development efficiency and user experience. I approach every project not just as a developer, but with the mindset of a product owner — focused on delivering value, thinking ahead, and building systems that lead the race in today's tech-driven world.</p>

        <div className="flex flex-col md:flex-row md:gap-16 mb-6">
  <div>
    <h3 className="text-xl font-semibold mb-2">🎯 I specialize in:</h3>
    <ul className="list-disc list-inside">
      <li className="whitespace-nowrap">Microservices architecture</li>
      <li className="whitespace-nowrap">CI/CD automation</li>
      <li className="whitespace-nowrap">Backend systems development</li>
    </ul>
  </div>
          <div>
    <h3 className="text-xl font-semibold mb-2 whitespace-nowrap">📊 Industry experience in:</h3>
            <ul className="list-disc list-inside">
              <li>Finance</li>
              <li>Healthcare</li>
              <li>Telecom</li>
            </ul>
          </div>
      <div className="md:mt-0 mt-6 md:ml-[-20px]">
    <h3 className="text-xl font-semibold mb-2">🧠 Developer Strengths</h3>
    <ul className="list-disc list-inside">
      <li className="whitespace-nowrap">Strong grasp of Data Structures & Algorithms for building efficient, optimized code</li>
      <li className="whitespace-nowrap">Passionate about solving real-world problems using logical thinking and design</li>
      <li className="whitespace-nowrap">Blend backend engineering with product mindset to build scalable, user-driven solutions</li>
    </ul>
  </div>
</div>

      

<div className="flex gap-4 mb-10">
  <a href="/Praneeth_Nagilla_Resume.pdf" target="_blank" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">View Resume</a>
  <a href="/Praneeth_Nagilla_Resume.pdf" download className="border border-gray-500 px-4 py-2 rounded hover:bg-gray-100">Download Resume</a>
</div>

     
<div className="bg-gray-500 border border-gray-600 rounded-xl p-6 mt-10">
  <h2 className="text-3xl font-bold mb-4">Experience</h2>

  <div className="mb-6">
    <h3 className="text-2xl font-semibold">🏢 Centene Corporation – Java Full Stack Developer</h3>
    <p className="text-md text-gray-700">Jan 2024 – Present | St. Louis, USA</p>
    <ul className="list-disc list-inside mt-2 text-lg">
      <li>Spearheading backend development using Spring Boot microservices on AWS, ensuring HIPAA and FHIR compliance.</li>
      <li>Built secure APIs with OAuth2/JWT, CI/CD automation via Jenkins and GitHub Actions, deployed to Kubernetes.</li>
      <li>Integrated Kafka, Prometheus, Dynatrace, and ELK; designed React dashboards and optimized PostgreSQL pipelines.</li>
    </ul>
  </div>

  <div className="mb-6">
    <h3 className="text-2xl font-semibold">🏢 Wells Fargo – Java Developer</h3>
    <p className="text-md text-gray-700">Aug 2021 – Feb 2023 | Pune, India</p>
    <ul className="list-disc list-inside mt-2 text-lg">
      <li>Modernized banking systems using Java, Spring Boot, and Kafka with SOX-compliant workflows.</li>
      <li>Developed GraphQL/REST APIs, automated journal entries, and real-time reconciliation for financial services.</li>
      <li>Built Angular dashboards, optimized SQL queries, and managed audit-ready reports via Athena and AWS S3.</li>
    </ul>
  </div>

  <div className="mb-6">
    <h3 className="text-2xl font-semibold">🏢 T-Mobile – Java Developer</h3>
    <p className="text-md text-gray-700">Aug 2019 – July 2021 | Hyderabad, India</p>
    <ul className="list-disc list-inside mt-2 text-lg">
      <li>Developed microservices for NEFT/RTGS/IMPS using Java 11, Spring Boot, Kafka, and Kubernetes.</li>
      <li>Implemented PCI-DSS-compliant transaction modules with dual-ledger accounting and SLA tracking.</li>
      <li>Designed Angular dashboards and real-time alert systems for payments and SLA violations.</li>
    </ul>
  </div>
</div>

<div className="bg-gray-700 text-white border border-gray-600 rounded-xl p-6 mt-6">
  <h2 className="text-3xl font-bold mb-4">Internships</h2>

  <div className="mb-6">
    <h3 className="text-2xl font-semibold">🛠 BHEL, Hyderabad, India – Intern</h3>
    <p className="text-md text-gray-300">May 2019 – June 2019</p>
    <ul className="list-disc list-inside mt-2 text-lg">
      <li>Studied PLC integration in CNC machines to improve automation and efficiency</li>
      <li>Built a Java Spring Boot dashboard to visualize live machine metrics</li>
      <li>Documented findings and presented insights to engineers, strengthening reporting skills</li>
    </ul>
  </div>

  <div>
    <h3 className="text-2xl font-semibold">💻 ECIL, Hyderabad, India – Intern</h3>
    <p className="text-md text-gray-300">May 2017 – Nov 2017</p>
    <ul className="list-disc list-inside mt-2 text-lg">
      <li>Worked on Hospital Management System using HTML, Java, and SQL</li>
      <li>Streamlined patient record management and appointment scheduling flows</li>
      <li>Gained real-world experience collaborating with large, agile teams</li>
    </ul>
  </div>
</div>

    
        <div className="bg-black text-white mt-10 rounded-xl overflow-hidden">
  <h2 className="text-2xl font-bold p-4">Technical Skills</h2>
  <table className="w-full table-auto">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold w-1/3 border-r border-gray-700">Languages</td>
                <td className="p-3 border-l border-gray-700">Java 17, JavaScript (ES6+), TypeScript, Python, SQL, PL/SQL, Shell Script</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Databases</td>
                <td className="p-3 border-l border-gray-700">PostgreSQL, Aurora PostgreSQL, MySQL, MongoDB, Redshift, DynamoDB</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">J2EE Technologies</td>
                <td className="p-3 border-l border-gray-700">RESTful Web Services, JPA, Microservices, Kafka, Spring Data JPA</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">UI Technologies</td>
                <td className="p-3 border-l border-gray-700">HTML5, CSS3, JavaScript, TypeScript, Angular, React.js, Bootstrap, Redux, JSON, AJAX</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Frameworks</td>
                <td className="p-3 border-l border-gray-700">Spring Boot, Spring MVC, Spring Cloud, Spring Security, Hibernate, Spring ORM</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Cloud Technologies</td>
                <td className="p-3 border-l border-gray-700">AWS (EC2, S3, RDS, Lambda, Redshift, Route53, CloudWatch, SageMaker, Kinesis, CloudTrail, Data Pipeline)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Messaging Services</td>
                <td className="p-3 border-l border-gray-700">Kafka, RabbitMQ, AWS SQS, AWS SNS</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">DevOps & CI/CD</td>
                <td className="p-3 border-l border-gray-700">Jenkins, GitHub Actions, Docker, Helm, Kubernetes, OpenShift</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Monitoring & Logging</td>
                <td className="p-3 border-l border-gray-700">Dynatrace, Grafana, Prometheus, ELK Stack, AWS CloudTrail, Splunk</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Web Services</td>
                <td className="p-3 border-l border-gray-700">REST, GraphQL, SOAP</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Reporting & Visualization</td>
                <td className="p-3 border-l border-gray-700">Power BI, Tableau, Splunk, ELK Stack</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Testing Tools</td>
                <td className="p-3 border-l border-gray-700">JUnit, TestNG, Postman, Cypress, Mockito, Selenium, REST Assured</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Version Control</td>
                <td className="p-3 border-l border-gray-700">Git, GitHub, GitLab, Bitbucket, JIRA, Confluence</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Security & Access</td>
                <td className="p-3 border-l border-gray-700">OAuth2.0, JWT, IAM Roles & Policies, AWS KMS, RBAC, TLS, Encryption Techniques</td>
              </tr>
              <tr>
                <td className="p-3 font-bold border-r border-gray-700">Web/Application Servers</td>
                <td className="p-3 border-l border-gray-700">Tomcat, Nginx</td>
              </tr>
            </tbody>
          </table>
        </div>
                     {/* ✅ Projects Section */}
        <h3 className="text-3xl semibold mb-6 mt-16 text-center text-gray-900">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-6 md:px-16 lg:px-24">
          <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 hover:shadow-3xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">🩸 Blood Management Portal</h3>
            <a href="https://github.com/Praneeth340/blood-Management-Portal" target="_blank" className="text-blue-600 font-medium">GitHub: View Project</a>
            <p className="mt-3 text-gray-800">A full-stack portal for efficient blood donation and management, built with Java and Spring Boot on the backend and integrated with MySQL for secure data handling.</p>
            <ul className="list-disc list-inside text-base mt-3 text-gray-700">
              <li>Built real-time donor-recipient matching and inventory tracking features</li>
              <li>Implemented role-based access for donors, hospitals, and admins</li>
              <li>Designed responsive UI and RESTful APIs for smooth data flow</li>
            </ul>
            <p className="text-base mt-3 font-semibold text-gray-800">Tech Stack: Java, Spring Boot, MySQL, REST APIs, JSP/Servlets</p>
          </div>

          <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 hover:shadow-3xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">📝 Simple Notes App (Dockerized React + Django)</h3>
            <a href="https://github.com/Praneeth340/notes-app" target="_blank" className="text-blue-600 font-medium">GitHub: View Project</a>
            <p className="mt-3 text-gray-800">A cross-platform notes app created for the TWS community using a full CI/CD-ready stack. Dockerized for easy deployment and integrated with Nginx reverse proxy.</p>
            <ul className="list-disc list-inside text-base mt-3 text-gray-700">
              <li>Developed a full-stack app with Django backend and React frontend</li>
              <li>Containerized with Docker and served using Nginx reverse proxy</li>
              <li>Built for scalable deployment with RESTful APIs and database support</li>
            </ul>
            <p className="text-base mt-3 font-semibold text-gray-800">Tech Stack: Django, React, Node.js, Docker, Nginx, PostgreSQL</p>
          </div>

          <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 hover:shadow-3xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">📡 Reefer Monitoring System (IoT + Embedded + NavIC)</h3>
            <p className="text-blue-600 font-medium">Based on Springer-published research</p>
            <p className="mt-3 text-gray-800">A complete hardware-software system to monitor gas, humidity, and temperature levels in refrigerated containers. Built using STM32 microcontroller, I2C sensors, and LCDs with UART debugging and GPS-based tracking via NavIC.</p>
            <ul className="list-disc list-inside text-base mt-3 text-gray-700">
              <li>Integrated gas (MQ135) and DHT11 sensors via I2C and LCD for live display</li>
              <li>Used STM32 (C/CubeMX) for embedded logic, UART communication, and timing</li>
              <li>Parsed GPS data from GPRMC strings and displayed real-time geolocation</li>
              <li>Extended system aligns with published NavIC reefer monitoring paper</li>
            </ul>
            <p className="text-base mt-3 font-semibold text-gray-800">Tech Stack: Embedded C, STM32, HAL Drivers, I2C, UART, LCD, GPS, MQ135, DHT11</p>
          </div>
        </div>


         
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
  <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
    <p className="text-2xl mb-2">📞</p>
    <p className="text-blue-600 font-medium">+1 (913) 282-1310</p>
  </div>
  <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
    <p className="text-2xl mb-2">📧</p>
 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=nagillapraneeth88@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  nagillapraneeth88@gmail.com
</a>

  </div>
  <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
    <p className="text-2xl mb-2">💻</p>
    <a href="https://github.com/Praneeth340" className="text-blue-600 font-medium" target="_blank">GitHub Profile</a>
  </div>
  <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
    <p className="text-2xl mb-2">🔗</p>
    <a href="https://www.linkedin.com/in/praneeth-nagilla/" className="text-blue-600 font-medium" target="_blank">LinkedIn Profile</a>
  </div>
  <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
    <p className="text-2xl mb-2">📄</p>
    <a href="https://doi.org/10.1007/978-981-97-0562-7_15" className="text-blue-600 font-medium" target="_blank">Springer Publication</a>
  </div>
   <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
  <p className="text-2xl mb-2">📄</p>
<a href={`${import.meta.env.BASE_URL}A_aws.jpg`} className="text-blue-600 font-medium" target="_blank" rel="noopener noreferrer">
    Certifications
  </a>
</div>


</div>

      </div>
    </div>
    
  );
}

export default App;
