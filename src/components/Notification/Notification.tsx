import React from 'react';
import { Text } from './Notification.styled';
import { NotifType } from '../types';

export default function Notification({ message }: NotifType) {
  return <Text>{message}</Text>;
}
