interface IMenu {
  id: number,
  name: string,
  url: string,
  icon: string
}

const adminMenu: IMenu[] = [
  {
    id: 0,
    name: 'Profile',
    url: 'profile',
    icon: 'fa-solid fa-user'
  },
  {
    id: 1,
    name: 'Setting',
    url: 'setting',
    icon: 'fa-solid fa-gear'
  },
  {
    id: 2,
    name: 'Logout',
    url: 'logout',
    icon: 'fa-solid fa-circle-left'
  },
];

const adminNav:IMenu[] = [
  {
    id: 0,
    name: 'Management Source',
    url: 'management/source',
    icon: 'fa-solid fa-globe'
  },
  {
    id: 1,
    name: 'Management Topic',
    url: 'management/topic',
    icon: 'fa-solid fa-list'
  },
  {
    id: 2,
    name: 'Management News',
    url: 'management/news',
    icon: 'fa-regular fa-newspaper'
  },
  {
    id: 3,
    name: 'Management Video',
    url: 'management/video',
    icon: 'fa-regular fa-file-video'
  },
  {
    id: 4,
    name: 'Management Exam',
    url: 'management/exam',
    icon: 'fa-regular fa-clipboard'
  },
  {
    id: 5,
    name: 'Statistics',
    url: 'management/statistics',
    icon: 'fa-solid fa-chart-column'
  },
];

export {adminMenu, adminNav}
