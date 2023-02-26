import { ReactNode } from 'react';

export type StateType = {
  good: number;
  neutral: number;
  bad: number;
};

export type StatisticsType = {
  state: StateType;
  total: number;
  positivePercentage: number;
};

export type SectionType = {
  title: string;
  children: ReactNode;
};

export type NotifType = {
  message: string;
};

export type OptionType = {
  option: string;
};

export type FeedBackOptType = {
  options: Array<string>;
  addFeedback: (x: string) => void;
};
