import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from '../../../helpers/AppRoutes';
import { TopStoriesPage } from '../../pages/TopStoriesPage';
import { ClassicsPage } from '../../pages/ClassicsPage';
import { SubmissionsPage } from '../../pages/SubmissionsPage';
import { ActiveStoryPage } from '../../pages/ActiveStoryPage';

const router = createBrowserRouter([
  { path: AppRoutes.TopStories, element: <TopStoriesPage /> },
  { path: AppRoutes.Classics, element: <ClassicsPage /> },
  { path: AppRoutes.Submissions, element: <SubmissionsPage /> },
  { path: `${AppRoutes.ActiveStory}:storyId`, element: <ActiveStoryPage /> },
]);

export function RouteManager() {
  return <RouterProvider router={router} />;
}
