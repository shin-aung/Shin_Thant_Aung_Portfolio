import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.set(id, obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return active;
}
