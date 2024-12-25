interface IMenu {
  id:number,
  name:string,
  url:string,
}

const userMenu:IMenu[] = [
  {
    id: 0,
    name: 'Profile',
    url: 'profile',
  },
  {
    id: 1,
    name: 'Logout',
    url: 'logout',
  },
];

export { userMenu}
