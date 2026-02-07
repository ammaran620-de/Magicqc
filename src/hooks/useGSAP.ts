"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom hook for GSAP scroll animations
export const useGSAPReveal = (
  trigger: string,
  options?: {
    y?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    start?: string;
    end?: string;
    markers?: boolean;
  }
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(trigger);
    
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: options?.y ?? 60,
          opacity: options?.opacity ?? 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: options?.duration ?? 1,
          delay: options?.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options?.start ?? "top 85%",
            end: options?.end ?? "bottom 20%",
            toggleActions: "play none none reverse",
            markers: options?.markers ?? false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [trigger, options]);
};

// Cinematic text reveal animation
export const useTextReveal = (selector: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el) => {
      // Split text into words
      const text = el.textContent || "";
      const words = text.split(" ");
      el.innerHTML = words
        .map((word) => `<span class="inline-block overflow-hidden"><span class="gsap-word inline-block">${word}</span></span>`)
        .join(" ");

      const wordSpans = el.querySelectorAll(".gsap-word");
      
      gsap.fromTo(
        wordSpans,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector]);
};

// Parallax effect hook
export const useParallax = (selector: string, speed: number = 0.5) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el) => {
      gsap.to(el, {
        y: () => (window.innerHeight * speed) / 2,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, speed]);
};

// Stagger reveal for grids/lists
export const useStaggerReveal = (
  containerSelector: string,
  childSelector: string,
  options?: {
    stagger?: number;
    duration?: number;
    y?: number;
  }
) => {
  useEffect(() => {
    const containers = document.querySelectorAll(containerSelector);
    
    containers.forEach((container) => {
      const children = container.querySelectorAll(childSelector);
      
      gsap.fromTo(
        children,
        {
          y: options?.y ?? 40,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: options?.duration ?? 0.8,
          stagger: options?.stagger ?? 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerSelector, childSelector, options]);
};

// Scale and fade animation
export const useScaleReveal = (selector: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector]);
};

// Horizontal scroll section
export const useHorizontalScroll = (containerSelector: string, panelsSelector: string) => {
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    const panels = document.querySelectorAll(panelsSelector);
    
    if (!container || panels.length === 0) return;

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + (container as HTMLElement).offsetWidth,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerSelector, panelsSelector]);
};

// Counter animation
export const useCountUp = (selector: string, endValue: number, duration: number = 2) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el) => {
      const obj = { value: 0 };
      
      gsap.to(obj, {
        value: endValue,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.value).toString();
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, endValue, duration]);
};
