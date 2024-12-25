import {TopicModel} from "./topic.interface";
import {SourceModel} from "./source.interface";
import {ParagraphModel} from "./paragraph.interface";

export interface NewsModel {
  id:string;
  title: string;
  image: string;
  audio: string;
  status: boolean;
  viewed: number;
  tc_1?:string;
  tc_2?:string;
  tc_3?:string;
  tc_4?:string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  topic?: TopicModel;
  source: SourceModel;
  paragraphs?: ParagraphModel[];
}
