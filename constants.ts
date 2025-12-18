import { NavItem, UseCase } from './types';

export const APP_NAME = "Pulse";

export const NAV_ITEMS: NavItem[] = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Preview", href: "#demo" },
];

export const USE_CASES: UseCase[] = [
  {
    title: "Drummers",
    description: "Generate instant drumless tracks. Lock in with the original bassist without the studio drums getting in the way.",
    icon: "drums"
  },
  {
    title: "Guitarists",
    description: "Dissect the solo note-for-note. Or mute the rhythm guitar to take the lead spot yourself.",
    icon: "guitar"
  },
  {
    title: "Bassists",
    description: "Find the pocket. Bring the low end to the front to hear every ghost note and groove nuance.",
    icon: "bass"
  },
  {
    title: "Educators",
    description: "Curriculum at speed. Create custom backing tracks and isolated examples for students in seconds.",
    icon: "education"
  },
  {
    title: "Producers",
    description: "Surgical sampling. Extract obscure sounds like cowbells, background synths, or crowd noise cleanly.",
    icon: "search"
  }
];

export const MOCK_WAVEFORM_DATA = Array.from({ length: 100 }, (_, i) => ({
  index: i,
  value: Math.sin(i * 0.2) * Math.random() * 50 + 50
}));