import { z } from "zod";

export const TimelineEntrySchema = z.object({
  year: z.string(),
  title: z.string(),
  description: z.string(),
  term: z.string().optional(),
});

export const SchemeSchema = z.object({
  name: z.string(),
  launchDate: z.string(),
  focusArea: z.string(),
  beneficiaries: z.string(),
  category: z.string(),
});

export const AchievementSchema = z.object({
  category: z.string(),
  headline: z.string(),
  description: z.string(),
  stat: z.string(),
});

export const UpcomingProjectSchema = z.object({
  title: z.string(),
  status: z.string(),
  date: z.string(),
  description: z.string(),
  category: z.string(),
});

export const AwardSchema = z.object({
  name: z.string(),
  country: z.string(),
  year: z.number(),
});

export const SiteDataSchema = z.object({
  biography: z.array(TimelineEntrySchema),
  politicalJourney: z.array(TimelineEntrySchema),
  schemes: z.array(SchemeSchema),
  achievements: z.array(AchievementSchema),
  upcomingProjects: z.array(UpcomingProjectSchema),
  awards: z.array(AwardSchema),
});
