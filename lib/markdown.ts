import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const reportsDirectory = path.join(process.cwd(), 'newsletters');

export interface Report {
  slug: string;
  title: string;
  content: string;
  date?: string;
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

      return {
        slug,
        title,
        content,
        date: data.date || null,
      };
    });

  // Sort reports by title
  return reports.sort((a, b) => a.title.localeCompare(b.title));
}

export function getReportBySlug(slug: string): Report | null {
  try {
    const fullPath = path.join(reportsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract title from the first H1 heading or use filename
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');

    return {
      slug,
      title,
      content,
      date: data.date || null,
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
