import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faCode, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
      <div className="body-container" id="history">
        <h1>Timeline</h1>
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 196, 180, 0.07)', border: '1px solid rgba(0, 196, 180, 0.22)', borderRadius: '12px', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 196, 180, 0.22)' }}
            date="2017 - 2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
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
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faLaptop} />}
          >
            <h3 className="vertical-timeline-element-title">Kubrick Group Training, UK</h3>
            <h4 className="vertical-timeline-element-subtitle">Software & Data Engineering Course</h4>
            <ul>
              <li>Completed intensive 4-month training in enterprise software development</li>
              <li>Topics included Python, SQL, PySpark, cloud technologies, and Agile practices</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 196, 180, 0.07)', border: '1px solid rgba(0, 196, 180, 0.22)', borderRadius: '12px', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 196, 180, 0.22)' }}
            date="2022 - 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Shell, UK</h3>
            <h4 className="vertical-timeline-element-subtitle">Software & Data Engineer</h4>
            <ul>
              <li>Contracted via Kubrick Group, then hired directly as Shell staff</li>
              <li>Delivered six projects across four global business lines — Cyber Security, Lubricants, LNG, and Enterprise Knowledge Management</li>
              <li>Technical scope spanned batch ETL pipelines, NLP &amp; LLM orchestration, RAG &amp; vector search systems, and cloud-deployed full-stack data applications</li>
              <li>Worked end-to-end: system design, backend &amp; frontend development, cloud deployment, and senior stakeholder management</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 196, 180, 0.07)', border: '1px solid rgba(0, 196, 180, 0.22)', borderRadius: '12px', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 196, 180, 0.22)' }}
            date="2025 - present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Imperial College London, UK</h3>
            <h4 className="vertical-timeline-element-subtitle">MSc Computing</h4>
            <ul>
              <li>Intensive year-long programme covering systems programming, algorithms, distributed systems, computer vision, and graphics</li>
              <li>Research project: extending the KLEE symbolic execution engine to support context-free parsing of complex input formats within the LLVM toolchain</li>
              <li>Core coursework in C++; elective modules include Computer Vision, Graphics, and Networks & Distributed Systems</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

  );
}

export default Timeline;