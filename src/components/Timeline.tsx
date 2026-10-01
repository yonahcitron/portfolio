import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
      <div className="body-container" id="history">
        <h1>History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 196, 180, 0.07)', border: '1px solid rgba(0, 196, 180, 0.22)', borderRadius: '12px', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 196, 180, 0.22)' }}
            date="2017 - 2021"
            iconClassName="timeline-logo-badge"
            icon={<img className="timeline-logo timeline-logo--cambridge" src={`${process.env.PUBLIC_URL}/logos/timeline/cambridge.svg`} alt="University of Cambridge logo" />}
          >
            <h3 className="vertical-timeline-element-title">University of Cambridge, UK</h3>
            <h4 className="vertical-timeline-element-subtitle">Linguistics - MA, BA Hons.</h4>
            <ul>
              <li>Graduated with 1st Class Honours</li>
              <li>Received the David Thompson Prize for outstanding academic performance in finals</li>
              <li>Dissertation: applied data-analytic techniques to a Neo-Aramaic corpus grammar, exploring the effects of syntactic frequency and collocation</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 196, 180, 0.07)', border: '1px solid rgba(0, 196, 180, 0.22)', borderRadius: '12px', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 196, 180, 0.22)' }}
            date="2021 - 2022"
            iconClassName="timeline-logo-badge timeline-logo-badge--kubrick"
            icon={<img className="timeline-logo timeline-logo--kubrick" src={`${process.env.PUBLIC_URL}/logos/timeline/kubrick.svg`} alt="Kubrick Group logo" />}
          >
            <h3 className="vertical-timeline-element-title">Kubrick Group Training, UK</h3>
            <h4 className="vertical-timeline-element-subtitle">Employer-Sponsored Software Training</h4>
            <ul>
              <li>Completed intensive 4-month training in enterprise data engineering</li>
              <li>Topics included Python, SQL, PySpark, cloud technologies, and Agile practices</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 196, 180, 0.07)', border: '1px solid rgba(0, 196, 180, 0.22)', borderRadius: '12px', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 196, 180, 0.22)' }}
            date="2022 - 2025"
            iconClassName="timeline-logo-badge"
            icon={<img className="timeline-logo" src={`${process.env.PUBLIC_URL}/logos/timeline/shell.svg`} alt="Shell logo" />}
          >
            <h3 className="vertical-timeline-element-title">Shell, UK</h3>
            <h4 className="vertical-timeline-element-subtitle">Software & Data Engineer</h4>
            <ul>
              <li>Contracted via Kubrick Group, then hired directly as Shell staff</li>
              <li>Delivered projects across four global business lines — Cyber Security, Lubricants, LNG, and Enterprise Knowledge Management</li>
              <li>Technical scope spanned batch ETL pipelines, NLP &amp; LLM orchestration, RAG &amp; vector search systems, and cloud-deployed full-stack data applications</li>
              <li>Worked end-to-end: system design, backend &amp; frontend development, cloud deployment, and senior stakeholder management</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 196, 180, 0.07)', border: '1px solid rgba(0, 196, 180, 0.22)', borderRadius: '12px', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 196, 180, 0.22)' }}
            date="2025 - present"
            iconClassName="timeline-logo-badge timeline-logo-badge--imperial"
            icon={<img className="timeline-logo timeline-logo--full" src={`${process.env.PUBLIC_URL}/logos/timeline/imperial.svg`} alt="Imperial College London logo" />}
          >
            <h3 className="vertical-timeline-element-title">Imperial College London, UK</h3>
            <h4 className="vertical-timeline-element-subtitle">MSc Computing</h4>
            <ul>
              <li>Intensive year-long programme with core C++ coursework in systems programming and algorithms, plus electives in Advanced Computer Architecture, Networks &amp; Distributed Systems, Computer Vision, Graphics, and Mathematics &amp; Logic</li>
              <li>Dissertation: Effective Symbolic Execution of Parsers, supervised by Prof. Cristian Cadar. Designed and implemented pSWIG, an automated test-input generator combining incremental symbolic execution with coverage-guided and keyword-directed search.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 196, 180, 0.07)', border: '1px solid rgba(0, 196, 180, 0.22)', borderRadius: '12px', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 196, 180, 0.22)' }}
            date="2026 - present"
            iconClassName="timeline-logo-badge"
            icon={<img className="timeline-logo" src={`${process.env.PUBLIC_URL}/logos/timeline/prax.svg`} alt="Prax Industries logo" />}
          >
            <h3 className="vertical-timeline-element-title">Prax Industries</h3>
            <h4 className="vertical-timeline-element-subtitle">Physical AI Systems</h4>
            <ul>
              <li>Joined Prax Industries to build and deploy AI systems for physical industries.</li>
              <li>Working on systems that combine AI agents, specialised models and sensor data with industrial software and equipment to help engineers optimise production and automate operational workflows.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

  );
}

export default Timeline;
