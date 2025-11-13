import type { Report } from './markdown';

export function getRelatedReports(currentReport: Report, allReports: Report[], limit = 3): Report[] {
  if (!currentReport.categories || currentReport.categories.length === 0) {
    // If no categories, return most recent reports
    return allReports
      .filter(r => r.slug !== currentReport.slug)
      .slice(0, limit);
  }

  // Calculate similarity score based on shared categories
  const scored = allReports
    .filter(r => r.slug !== currentReport.slug)
    .map(report => {
      const sharedCategories = report.categories?.filter(cat =>
        currentReport.categories?.includes(cat)
      ) || [];

      return {
        report,
        score: sharedCategories.length,
      };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(item => item.report);
}
