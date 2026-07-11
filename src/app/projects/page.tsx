import { fetchGitHubProjects } from '@/lib/github';
import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Projects | Tisee747 Portfolio',
  description: 'Explore my software integrations, from backend architectures to machine learning pipelines.',
};

export default async function ProjectsPage() {
  const projects = await fetchGitHubProjects();

  return <ProjectsClient projects={projects} />;
}
