import React from 'react';
import { View } from 'react-native';
import { AuthContent } from '../../components/auth/AuthContent';

import { styles } from './styles';

export function SignUpScreen() {
  return <AuthContent isSignIn={true} />;
}
