// 메뉴 타입 정의
export interface Menu{
    id:number,
    restaurant:string,
    name: string,
    price: number,
    type:'kr'|'ch'|'jp'|'all',
    taste: 'hot'|'mild'|'all'
}

//메뉴 디테일 
export const initMenu:Menu = {
    id : 0,
    restaurant : '',
    name: '',
    price : 0,
    type : 'all',
    taste : 'all'
} as const;

// 메뉴 등록 타입
export type MenuCreate=Omit<Menu, 'id'>;

// 메뉴 수정 타입
export type MenuUpdate = Pick<Menu,'id'> & Partial<Omit<Menu,'id'>>;
