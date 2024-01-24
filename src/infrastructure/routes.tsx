import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/Home';
import { QueryClient } from '@tanstack/react-query';
import { userService } from '../service/endpoints';



export const publicRoutes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '*',
		element: <div>404</div>,
	}
];


export const privateRoutes = (queryClient: QueryClient): RouteObject[] => [
	{
		path: '/dashboard',
		loader: () => {
			queryClient.prefetchQuery({
				queryKey: ['user'],
				queryFn: userService.get,
				staleTime: 1000 * 60 * 60 * 2, // 2 hours
			});

			return null
		},
		lazy: async () => {
			const Dashboard = await import('../pages/dashboard/Dashboard');
			return { Component: Dashboard.default };
		},
	},
];
