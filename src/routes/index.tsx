import EntryPage from "../pages/EntryPage";
import ForumListPage from "../pages/ForumListPage";
import ForumPage from "../pages/ForumPage";
import InfoPage from "../pages/InfoPage";
import MessagePage from "../pages/MessagePage";

export const ENTRY_PATH = 'entry'
export const FORUM_PATH = 'forums/:forumId'
export const FORUMS_PATH = 'forums'
export const INFO_PATH = 'info'

export const publicRoutes = [
  {path: '/entry', element: <EntryPage/>}
]

export const privateRoutes = [
  {path: '/forums', element: <ForumListPage/>},
  {path: '/forums/:forumId', element: <ForumPage/>},
  {path: '/forums/:forumId/:messageId', element: <MessagePage/>}
]

export const commonRoutes = [
  {path: '/info', element: <InfoPage/>}
]