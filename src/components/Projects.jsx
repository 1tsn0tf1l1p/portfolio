import React, { useMemo, useState, useEffect, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

function renderInline(text) {
  const parts = String(text).split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      const content = part.slice(1, -1);
      return <code key={i} className="inline-code">{content}</code>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

const Modal = ({ open, onClose, project }) => {
  const [previewIndex, setPreviewIndex] = useState(null);

  const previewSrc = useMemo(() => {
    if (previewIndex == null || !project?.images) return null;
    return project.images[previewIndex] || null;
  }, [previewIndex, project]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (previewSrc) {
          setPreviewIndex(null);
        } else {
          onClose();
        }
      } else if (previewSrc && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault();
        if (e.key === 'ArrowLeft' && previewIndex > 0) {
          setPreviewIndex((i) => (i > 0 ? i - 1 : i));
        } else if (e.key === 'ArrowRight' && project?.images && previewIndex < project.images.length - 1) {
          setPreviewIndex((i) => (project.images && i < project.images.length - 1 ? i + 1 : i));
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose, previewSrc, previewIndex, project]);

  useEffect(() => {
    if (!open) setPreviewIndex(null);
  }, [open, project]);

  if (!open || !project) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>{project.title}</h4>
          <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        {project.longDescription ? (
          (() => {
            const ld = String(project.longDescription);
            if (ld.includes('•')) {
              const items = ld.split('•').map(s => s.trim()).filter(Boolean);
              return (
                <ul className="modal-description-list">
                  {items.map((it, i) => (
                    <li key={i}>{renderInline(it)}</li>
                  ))}
                </ul>
              );
            }
            const parts = ld.split('\n');
            if (parts.length > 1) {
              return (
                <div className="modal-description">
                  {parts.map((p, i) => (
                    <p key={i}>{renderInline(p)}</p>
                  ))}
                </div>
              );
            }
            return <p className="modal-description">{renderInline(ld)}</p>;
          })()
        ) : project.description ? (
          <p className="modal-description">{renderInline(project.description)}</p>
        ) : null}
        {project.images && project.images.length > 0 ? (
          <div className="modal-images">
            {project.images.map((src, i) => (
              <button
                key={i}
                type="button"
                className="modal-image-link"
                onClick={() => setPreviewIndex(i)}
                aria-label={project.title + ' screenshot ' + (i + 1) + ' preview'}
              >
                <img src={src} alt={project.title + ' screenshot ' + (i + 1)} />
              </button>
            ))}
          </div>
        ) : null}
        {project.links && project.links.length > 0 && (
          <div className="modal-links">
            {project.links.map((l, i) => (
              <a key={i} className="modal-link" href={l.href} target="_blank" rel="noreferrer noopener">
                {l.label || l.href}
              </a>
            ))}
          </div>
        )}
      </div>
      {previewSrc && (
        <div className="image-preview-overlay" role="dialog" aria-modal="true" onClick={(e) => { e.stopPropagation(); setPreviewIndex(null); }}>
          <div className="image-preview-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-preview-close" onClick={() => setPreviewIndex(null)} aria-label="Close image preview">×</button>
            {previewSrc && (
              <img src={previewSrc} alt={project.title + ' full-size preview'} className="image-preview-img" />
            )}
            {previewIndex != null && previewIndex > 0 && (
              <button type="button" className="image-preview-nav image-preview-prev" onClick={(e) => { e.stopPropagation(); setPreviewIndex(previewIndex - 1); }} aria-label="Previous image">‹</button>
            )}
            {previewIndex != null && project?.images && previewIndex < project.images.length - 1 && (
              <button type="button" className="image-preview-nav image-preview-next" onClick={(e) => { e.stopPropagation(); setPreviewIndex(previewIndex + 1); }} aria-label="Next image">›</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = ({ projects = [] }) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const openProject = useCallback((p) => {
    setSelected(p);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setSelected(null);
  }, []);

  const rows = useMemo(() => projects, [projects]);

  return (
    <section className="projects-section">
      <h3>Projects</h3>
      <div className="projects-grid">
        {rows.map((p, idx) => (
          <ProjectCard
            key={idx}
            title={p.title}
            subtitle={p.subtitle}
            tags={p.tags}
            onClick={() => openProject(p)}
          />
        ))}
      </div>

      <Modal open={open} onClose={close} project={selected} />
    </section>
  );
};

export default Projects;
