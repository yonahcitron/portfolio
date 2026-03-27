import React, { useRef, useEffect } from "react";
import '../assets/styles/Expertise.scss';

const skillsData = [
  {
    title: "Scalable Data Applications",
    description: "Four years building production data systems at enterprise scale. Full-stack applications, ETL and NLP batch pipelines, REST API backends, and interactive frontends — with hands-on experience across the whole stack from schema design and query optimisation to cloud deployment.",
    icons: [
      { id: "python_logo", src: `${process.env.PUBLIC_URL}/logos/py.svg`, alt: "Python Logo" },
      { id: "csharp_logo", src: `${process.env.PUBLIC_URL}/logos/cs.svg`, alt: "C# Logo" },
      { id: "javascript_logo", src: `${process.env.PUBLIC_URL}/logos/js.svg`, alt: "JavaScript Logo" }
    ],
  },
  {
    title: "DevOps & Infrastructure Automation",
    description: "Cloud-native from day one. IaC, CI/CD pipelines, containerisation, and automated testing across Azure and AWS. Strong preference for reproducible, parameterised deployments — and eliminating manual processes wherever possible.",
    icons: [
      { id: "azure_logo", src: `${process.env.PUBLIC_URL}/logos/az.svg`, alt: "Azure Logo" },
      { id: "bash_logo", src: `${process.env.PUBLIC_URL}/logos/sh.svg`, alt: "Bash Logo" },
      { id: "docker_logo", src: `${process.env.PUBLIC_URL}/logos/docker.svg`, alt: "Docker Logo" }
    ],
  },
  {
    title: "GenAI & LLMs",
    description: "Practical LLM engineering: RAG pipelines, vector search, prompt frameworks, and open-source model hosting. Built production GenAI features at Shell earlier than most enterprise teams had internal LLM access — from llama.cpp on private infrastructure to AzureML-hosted deployments.",
    icons: [
      { id: "huggingface_logo", src: `${process.env.PUBLIC_URL}/logos/hf.svg`, alt: "HuggingFace Logo" },
      { id: "azureml_logo", src: `${process.env.PUBLIC_URL}/logos/azml.svg`, alt: "AzureML Logo" },
      { id: "openai_logo", src: `${process.env.PUBLIC_URL}/logos/openai.svg`, alt: "OpenAI Logo" }
    ],
  },
  {
    title: "Systems & Compiler Infrastructure",
    description: "Currently completing an intensive MSc at Imperial College, building deep expertise in systems programming and compiler infrastructure. Research project extends the KLEE symbolic execution engine — an open-source symbolic virtual machine built on LLVM — to support context-free syntactic parsing of complex input formats. Developing expertise in systems-level C++, compilers, interpreters, and the LLVM toolchain through a combination of coursework and independent research.",
    icons: [
      { id: "cpp_logo", src: `${process.env.PUBLIC_URL}/logos/cpp.svg`, alt: "C++ Logo" },
      { id: "llvm_logo", src: `${process.env.PUBLIC_URL}/logos/llvm.svg`, alt: "LLVM Logo" },
      { id: "klee_logo", src: `${process.env.PUBLIC_URL}/logos/klee.svg`, alt: "KLEE Logo" }
    ],
  }
];

function Expertise() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="body-container" id="expertise">
      <h1>Expertise</h1>
      <div className="skills-grid" ref={gridRef}>
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-icons">
              {skill.icons.map((icon) => (
                <img key={icon.id} id={icon.id} src={icon.src} alt={icon.alt} className="svg-img" />
              ))}
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
