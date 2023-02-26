import React from 'react';
import { Text } from './Notification.styled';
import { NotifType } from '../types';

export function Notification({ message }: NotifType) {
  return <Text>{message}</Text>;
}
