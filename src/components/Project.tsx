import React, { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faDatabase, faBolt, faRobot, faOilCan, faBrain } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import "../assets/styles/Project.scss";

type ProjectType = {
  title: string;
  domain: string;
  icon: IconDefinition;
  description: string;
  details: string[];
};

const projects: ProjectType[] = [
  {
    title: "CyberSecOps Threat Intelligence Platform & Console",
    domain: "Cyber Security",
    icon: faShieldHalved,
    description:
      "Scoped and developed a full-stack data integration platform for ingesting, normalising, and enhancing external threat intelligence feeds, with a secure front-end console for real-time triage.",
    details: [
      "Built batch ETL pipelines consolidating diverse feeds into a consistent schema via a strongly-typed but flexible data interface.",
      "Deployed frontend leveraging enterprise-grade authentication (Azure Entra ID) and seamless integration with existing team workflows.",
      "Included on-demand text augmentation pipelines triggered from the front-end — enabling near-instant translation and summarisation.",
      "Implemented transparent auditing logs and data-state identification.",
      "Deployed all infrastructure and application code across staged environments using parameterised IaC and CI/CD pipelines.",
    ],
  },
  {
    title: "Enterprise SharePoint Document Processing Platform",
    domain: "Knowledge Management",
    icon: faDatabase,
    description:
      "Core maintainer and developer of a distributed .NET Core cloud platform processing millions of internal company documents.",
    details: [
      "Oversaw architectural improvements to enable cron-job batch-processing.",
      "Introduced DevOps ways of working by implementing CI/CD pipelines to automate legacy deployment practices (previously manual), transforming app reliability and deployment velocity.",
      "Improved audit trail and onboarding velocity by rigorously documenting microservice architecture in Visio.",
    ],
  },
  {
    title: "EV Charging Work Order Automation",
    domain: "EV Charging",
    icon: faBolt,
    description:
      "Built an AI pipeline to extract, categorise, and normalise work order data from unstructured email content using LLMs.",
    details: [
      "Designed and maintained the Databricks-backed data warehouse schema with versioned migrations (Alembic), ensuring data integrity across ingestion stages.",
      "Integrated with Shell's internal LLM client to orchestrate extraction and classification workflows at scale.",
    ],
  },
  {
    title: "EV Charging AI Knowledge System",
    domain: "EV Charging",
    icon: faBolt,
    description:
      "Implemented a full Medallion architecture on Databricks for document ingestion, transformation, and serving.",
    details: [
      "Built vector search endpoints and registered models via MLflow for retrieval-augmented generation over internal documentation.",
      "Deployed a continuous delivery pipeline with automated LLM evaluation to maintain answer quality over time.",
    ],
  },
  {
    title: "LLM Insight Generation Framework",
    domain: "Internal Tools",
    icon: faRobot,
    description:
      "Developed internal prompt framework in the early-stage LLM tooling landscape, allowing rapid augmentation and extraction of unstructured text into structured columns for downstream analysis.",
    details: [
      "Consolidated a common intra-departmental utility — analysts specify data source columns, output column, model parameters and prompt, and the framework handles the rest.",
      "Backend experimented with open-source models securely on private cloud infrastructure using llama.cpp.",
      "Worked with individual teams on custom pre-processing pipelines, including a graph-based email deduplication algorithm to reduce token usage.",
    ],
  },
  {
    title: "Lubricants Competitive Intelligence Portal",
    domain: "Lubricants",
    icon: faOilCan,
    description:
      "Built a data aggregation and search portal consolidating multiple external intelligence feeds, with NLP-powered classification, semantic search, and summarisation.",
    details: [
      "Optimised search and result-ranking in PostgreSQL using stored procedures.",
      "Implemented domain-specific classification, tagging algorithms, and semantic search over vector databases.",
      "Built back-end APIs in Express.js, orchestrating data batches with Azure Data Factory.",
      "Implemented modular data pipeline stages on AzureML, composable as YAML files with Dockerised runtime environments and comprehensive CI/CD.",
      "Heavily involved in improving team's ways of working and refining project focus; nominated for internal Shell award for exceptional contributions to project delivery.",
    ],
  },
  {
    title: "Legacy Knowledge Management Chatbot Upgrade & Platform Migration",
    domain: "Knowledge Management",
    icon: faBrain,
    description:
      "Modernised legacy knowledge management app, integrating useful functionality into the enterprise platform.",
    details: [
      "Upgraded the app to use LLMs for semantic queries over a proprietary knowledge base (RAG), delivering human-readable answers.",
      "Built CI/CD pipeline, converting manual deployments to parameterised infrastructure-as-code (IaC).",
      "Major refactor of code for maintainability, enhanced prompt design, and upgraded models for performance and reliability.",
    ],
  },
];

function Project() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="body-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-list" ref={listRef}>
        {projects.map((project, index) => (
          <div
            className={`project-card ${expandedIndex === index ? "expanded" : ""}`}
            key={index}
            onClick={() => toggleExpand(index)}
          >
            <div className="project-header">
              <div className="project-header-text">
              <div className="project-domain-tag">
                <FontAwesomeIcon icon={project.icon} className="project-domain-icon" />
                <span>{project.domain}</span>
              </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <ExpandMoreIcon className={`expand-icon ${expandedIndex === index ? "rotated" : ""}`} />
            </div>
            <div className={`project-details ${expandedIndex === index ? "open" : ""}`}>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
