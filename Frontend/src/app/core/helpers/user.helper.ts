interface IMenu {
  id:number,
  name:string,
  url:string,
}

const userMenu:IMenu[] = [
  {
    id: 0,
    name: 'Hồ sơ',
    url: 'profile',
  },
  {
    id: 1,
    name: 'Thiết lặp',
    url: 'setting',
  },
  {
    id: 2,
    name: 'Đăng xuất',
    url: 'logout',
  },
];

export { userMenu}
