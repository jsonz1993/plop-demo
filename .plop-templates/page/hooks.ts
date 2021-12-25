import React from 'react';

export function useInit() {
  const [state, setState] = React.useState({});
  return [state, setState];
}