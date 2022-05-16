export interface CardProps {
  coverUrl: string;
  description: string;
  id: string;
  name: string;
  place: string;
  type: string;
  // meetings: [];
}

export interface ItemProps {
  item: CardProps;
}

export interface Category {
  title: string;
  filter: string;
  select: string[];
}

export interface ProductProps {
  club: CardProps;
  createdAt: string;
  leaders: [];
  partners: [];
  price: number;
}

export interface SearchStateProps {
  filter: string;
  search: string[];
}

export interface ProductSearchProps {
  setSearch: Function;
  searchKeyword: string;
  setSearchKeyword: Function;
  searchEnter: Function;
}

export interface SearchSelect {
  placeFilter: string[];
  dayFilter: string[];
  typeFilter: string[];
  categoryFilter: string[];
}

export interface CheckboxProps {
  item: string;
  select: SearchStateProps;
  selectCate: SearchSelect;
  setSelectCate: Function;
}

export interface CategoryProps {
  setSelect: Function;
  setIsFilterClick: Function;
}

export interface SearchProps {
  place: string[];
  day: string[];
  type: string[];
  category: string[];
}
