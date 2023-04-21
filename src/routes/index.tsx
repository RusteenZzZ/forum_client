import EntryPage from "../pages/EntryPage";
import ForumListPage from "../pages/ForumListPage";
import ForumPage from "../pages/ForumPage";
import InfoPage from "../pages/InfoPage";

export const ENTRY_PATH = 'entry'
export const FORUM_PATH = 'forums/:forumId'
export const FORUMS_PATH = 'forums'
export const INFO_PATH = 'info'

export const publicRoutes = [
  {path: '/entry', element: <EntryPage/>}
]

export const privateRoutes = [
  {path: '/forums/:forumId', element: <ForumPage/>},
  {path: '/forums', element: <ForumListPage/>}
]

export const commonRoutes = [
  {path: '/info', element: <InfoPage/>}
]