import { fetchGitHubProjects } from '@/lib/github';
import HomeClient from './HomeClient';

export const metadata = {
  title: 'Tisee747 | Backend & AI Engineer',
  description: 'Portfolio of Tisee747, specializing in backend architectures, APIs, and AI integrations.',
};

export default async function HomePage() {
  const projects = await fetchGitHubProjects();

  return <HomeClient projects={projects} />;
}
