import BookModel from "../../models/Book";
import { RouteComponentProps } from "react-router";
import { ReactNode } from "react";

export interface BookCardProps extends RouteComponentProps<any> {
  book: BookModel;
  currentBook: BookModel;
  isOpenActionDialog: boolean;
  isSelectBook: boolean;
  isSelected: boolean;
  dragItem: string;
  selectedBooks: string[];
  handleSelectBook: (isSelectBook: boolean) => void;
  handleReadingBook: (book: BookModel) => void;
  handleActionDialog: (isShowActionDialog: boolean) => void;
  t: (title: string) => string;
  handleDragItem: (key: string) => void;
  handleSelectedBooks: (selectedBooks: string[]) => void;
  handleDeleteDialog: (isShow: boolean) => void;
  children?: ReactNode;
}
export interface BookCardState {
  isFavorite: boolean;
  isHover: boolean;
  left: number;
  top: number;
  direction: string;
  cover: string;
  isCoverExist: boolean;
  isBookOffline: boolean;
}
