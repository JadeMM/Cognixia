import React from 'react';

export const NameContext = React.createContext({
    name: '',
    updateName: () => {}
})