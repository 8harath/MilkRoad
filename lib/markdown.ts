import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cleanMarkdownContent } from './cleanMarkdown';

const reportsDirectory = path.join(process.cwd(), 'newsletters');

export interface Report {
  slug: string;
  title: string;
  content: string;
  date?: string | null;
  dateObj?: Date | null;
}

function parseDate(dateStr: string): Date | null {
  try {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
  } catch {
    return null;
  }
}

function extractDateFromContent(content: string): { dateStr: string | null; dateObj: Date | null } {
  // Look for date patterns like "January 04, 2025" or "February 29, 2024"
  const dateMatch = content.match(/^(?:#{1,6}\s+.+?\n\n)?([A-Z][a-z]+\s+\d{1,2},\s+\d{4})/m);

  if (dateMatch) {
    const dateStr = dateMatch[1];
    const dateObj = parseDate(dateStr);
    return { dateStr, dateObj };
  }

  return { dateStr: null, dateObj: null };
}

export function getAllReports(): Report[] {
  const fileNames = fs.readdirSync(reportsDirectory);
  const reports = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(reportsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Extract title from the first H1 heading or use filename
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');

      // Extract date from content
      const { dateStr, dateObj } = extractDateFromContent(content);

      return {
        slug,
        title,
        content: cleanMarkdownContent(content),
        date: dateStr || data.date || null,
        dateObj: dateObj || (data.date ? parseDate(data.date) : null),
      };
    });

  // Sort reports by date (newest first), then by title
  return reports.sort((a, b) => {
    if (a.dateObj && b.dateObj) {
      return b.dateObj.getTime() - a.dateObj.getTime();
    }
    if (a.dateObj) return -1;
    if (b.dateObj) return 1;
    return a.title.localeCompare(b.title);
  });
}

export function getReportBySlug(slug: string): Report | null {
  try {
    const fullPath = path.join(reportsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract title from the first H1 heading or use filename
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');

    // Extract date from content
    const { dateStr, dateObj } = extractDateFromContent(content);

    return {
      slug,
      title,
      content: cleanMarkdownContent(content),
      date: dateStr || data.date || null,
      dateObj: dateObj || (data.date ? parseDate(data.date) : null),
    };
  } catch (error) {
    return null;
  }
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(reportsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}
